// DO NOT TOUCH THIS FILE
const {
  getInvoiceSubtotal,
  getInvoiceTaxes,
  getInvoiceTotal,
  getInvoicesOverdue,
  getInvoicesMatchingCharacter,
  getInvoicesByStatus,
  getInvoices,
} = require("../invoice");

const exampleInvoices = [
  {
    id: 1,
    number: "F-001-2022",
    customer: "John Doe",
    issuedOn: "2024-01-15",
    validUntil: "2024-02-15",
    status: "accepted",
    products: [
      {
        name: "Product A",
        desc: "Description for Product A",
        price: 50,
        tax: 10,
        quantity: 1,
      },
      {
        name: "Product B",
        desc: "Description for Product B",
        price: 30,
        tax: 20,
        quantity: 1,
      },
    ],
  },
  {
    id: 2,
    number: "F-002-2022",
    customer: "Jane Smith",
    issuedOn: "2023-02-01",
    validUntil: "2023-03-01",
    status: "pending",
    products: [
      {
        name: "Product C",
        desc: "Description for Product C",
        price: 75,
        tax: 20,
        quantity: 2,
      },
      {
        name: "Product C",
        desc: "Description for Product C",
        price: 75,
        tax: 20,
        quantity: 1,
      },
    ],
  },
  {
    id: 3,
    number: "F-003-2022",
    customer: "Bob Johnson",
    issuedOn: "2024-03-10",
    validUntil: "2024-04-10",
    status: "rejected",
    products: [
      {
        name: "Product D",
        desc: "Description for Product D",
        price: 40,
        tax: 20,
        quantity: 1,
      },
      {
        name: "Product E",
        desc: "Description for Product E",
        price: 60,
        tax: 10,
        quantity: 2,
      },
      {
        name: "Product E",
        desc: "Description for Product E",
        price: 60,
        tax: 10,
        quantity: 3,
      },
    ],
  },
  {
    id: 4,
    number: "F-004-2022",
    customer: "Alice Brown",
    issuedOn: "2023-04-05",
    validUntil: "2023-05-05",
    status: "accepted",
    products: [
      {
        name: "Product E",
        desc: "Description for Product E",
        price: 60,
        tax: 10,
        quantity: 1,
      },
      {
        name: "Product F",
        desc: "Description for Product F",
        price: 25,
        tax: 20,
        quantity: 1,
      },
    ],
  },
  {
    id: 5,
    number: "F-005-2022",
    customer: "Charlie White",
    issuedOn: "2024-05-20",
    validUntil: "2024-06-20",
    status: "pending",
    products: [
      {
        name: "Product G",
        desc: "Description for Product G",
        price: 55,
        tax: 20,
        quantity: 7,
      },
      {
        name: "Product H",
        desc: "Description for Product H",
        price: 30,
        tax: 20,
        quantity: 2,
      },
    ],
  },
  {
    id: 6,
    number: "F-006-2022",
    customer: "Eva Davis",
    issuedOn: "2023-06-12",
    validUntil: "2023-07-12",
    status: "accepted",
    products: [
      {
        name: "Product I",
        desc: "Description for Product I",
        price: 45,
        tax: 20,
        quantity: 1,
      },
    ],
  },
  {
    id: 7,
    number: "F-007-2022",
    customer: "Samuel Miller",
    issuedOn: "2022-07-08",
    validUntil: "2022-08-08",
    status: "pending",
    products: [
      {
        name: "Product J",
        desc: "Description for Product J",
        price: 65,
        tax: 20,
        quantity: 1,
      },
      {
        name: "Product K",
        desc: "Description for Product K",
        price: 20,
        tax: 20,
        quantity: 5,
      },
    ],
  },
  {
    id: 8,
    number: "F-008-2022",
    customer: "Linda Taylor",
    issuedOn: "2022-08-25",
    validUntil: "2022-09-25",
    status: "rejected",
    products: [
      {
        name: "Product L",
        desc: "Description for Product L",
        price: 35,
        tax: 20,
        quantity: 3,
      },
      {
        name: "Product M",
        desc: "Description for Product M",
        price: 50,
        tax: 5,
        quantity: 2,
      },
    ],
  },
  {
    id: 9,
    number: "F-009-2022",
    customer: "John Wilson",
    issuedOn: "2022-09-18",
    validUntil: "2022-10-18",
    status: "accepted",
    products: [
      {
        name: "Product N",
        desc: "Description for Product N",
        price: 70,
        tax: 20,
        quantity: 1,
      },
    ],
  },
  {
    id: 10,
    number: "F-010-2022",
    customer: "Olivia Moore",
    issuedOn: "2022-10-10",
    validUntil: "2022-11-10",
    status: "pending",
    products: [
      {
        name: "Product O",
        desc: "Description for Product O",
        price: 40,
        tax: 5,
        quantity: 1,
      },
      {
        name: "Product P",
        desc: "Description for Product P",
        price: 60,
        tax: 10,
        quantity: 1,
      },
    ],
  },
];

describe("getInvoiceSubtotal", () => {
  describe("given test cases", () => {
    const exampleInvoice = {
      id: 2,
      number: "F-002-2022",
      customer: "Jane Smith",
      issuedOn: "2022-02-01",
      validUntil: "2022-03-01",
      status: "pending",
      products: [
        {
          name: "Product A",
          desc: "Description for Product A",
          price: 75,
          tax: 5,
          quantity: 1,
        },
        {
          name: "Product B",
          desc: "Description for Product B",
          price: 30,
          tax: 5,
          quantity: 1,
        },
      ],
    };
    it("returns the sum of the prices of the products", () => {
      expect(getInvoiceSubtotal(exampleInvoice)).toBe(105);
    });
  });
  describe("all tests cases", () => {
    const expectedResult = [80, 225, 340, 85, 445, 45, 165, 205, 70, 100];
    for (const invoice of exampleInvoices) {
      it(`returns the sum of the prices of the products ${invoice.id}`, () => {
        expect(getInvoiceSubtotal(invoice)).toBe(
          expectedResult[invoice.id - 1]
        );
      });
    }
  });
  describe("no products provided", () => {
    it("returns 0", () => {
      expect(getInvoiceSubtotal({ products: [] })).toBe(0);
    });
  });
});

describe("getInvoiceTaxes", () => {
  describe("given test cases", () => {
    const exampleInvoice = {
      id: 2,
      number: "F-002-2022",
      customer: "Jane Smith",
      issuedOn: "2022-02-01",
      validUntil: "2022-03-01",
      status: "pending",
      products: [
        {
          name: "Product A",
          desc: "Description for Product A",
          price: 75,
          tax: 20,
          quantity: 1,
        },
        {
          name: "Product B",
          desc: "Description for Product B",
          price: 30,
          tax: 10,
          quantity: 1,
        },
      ],
    };

    it("returns the sum of taxes for the products", () => {
      expect(getInvoiceTaxes(exampleInvoice)).toBe(18);
    });
  });

  describe("all tests cases", () => {
    const expectedResult = [11, 45, 38, 11, 89, 9, 33, 26, 14, 8];

    for (const invoice of exampleInvoices) {
      it(`returns the sum of taxes for the products for invoice ${invoice.id}`, () => {
        expect(getInvoiceTaxes(invoice)).toBe(expectedResult[invoice.id - 1]);
      });
    }
  });

  describe("no products provided", () => {
    it("returns 0", () => {
      expect(getInvoiceTaxes({ products: [] })).toBe(0);
    });
  });
});

describe("getInvoiceTotal", () => {
  describe("given test cases", () => {
    const exampleInvoice = {
      id: 2,
      number: "F-002-2022",
      customer: "Jane Smith",
      issuedOn: "2022-02-01",
      validUntil: "2022-03-01",
      status: "pending",
      products: [
        {
          name: "Product A",
          desc: "Description for Product A",
          price: 75,
          tax: 20,
          quantity: 1,
        },
        {
          name: "Product B",
          desc: "Description for Product B",
          price: 30,
          tax: 10,
          quantity: 1,
        },
      ],
    };

    it("returns the sum of the subtotal and taxes", () => {
      expect(getInvoiceTotal(exampleInvoice)).toBe(123);
    });
  });

  describe("all tests cases", () => {
    const expectedResult = [91, 270, 378, 96, 534, 54, 198, 231, 84, 108];

    for (const invoice of exampleInvoices) {
      it(`returns the sum of the subtotal and taxes for invoice ${invoice.id}`, () => {
        expect(getInvoiceTotal(invoice)).toBe(expectedResult[invoice.id - 1]);
      });
    }
  });

  describe("no products provided", () => {
    it("returns 0", () => {
      expect(getInvoiceTotal({ products: [] })).toBe(0);
    });
  });
});

describe("getInvoicesOverdue", () => {
  describe("given test cases", () => {
    const invoicesList = [
      {
        id: 1,
        number: "INV001",
        validUntil: "2022-02-01",
        // other properties...
      },
      {
        id: 2,
        number: "INV002",
        validUntil: "2022-01-15",
        // other properties...
      },
      // Add more invoices as needed
    ];

    it("returns the list of overdue invoices", () => {
      const overdueInvoices = getInvoicesOverdue(invoicesList, "2022-02-01");
      expect(overdueInvoices.length).toBe(1);
      const overdueInvoices2 = getInvoicesOverdue(invoicesList, "2022-03-19");
      expect(overdueInvoices2.length).toBe(2);

      const overdueInvoices3 = getInvoicesOverdue(invoicesList, "2021-03-19");
      expect(overdueInvoices3.length).toBe(0);
    });
  });

  describe("all tests cases", () => {
    const dateToTest = ["2024-02-01", "2023-02-01", "2022-02-01"];
    const expectedResult = [7, 4, 0];
    let i = 0;

    for (const date of dateToTest) {
      it(`returns the list of overdue invoices for date ${date}`, () => {
        expect(getInvoicesOverdue(exampleInvoices, date).length).toBe(
          expectedResult[i]
        );
        i += 1;
      });
    }
  });
});

describe("getInvoicesMatchingCustomer", () => {
  describe("given test cases", () => {
    const invoicesList = [
      {
        id: 1,
        number: "INV001",
        customer: "John Doe",
        // other properties...
      },
      {
        id: 2,
        number: "INV002",
        customer: "John Smith",
        // other properties...
      },
      {
        id: 3,
        number: "INV002",
        customer: "Jane Monroe",
        // other properties...
      },
      // Add more invoices as needed
    ];

    it("returns the list of invoices matching the customer", () => {
      const matchingInvoices = getInvoicesMatchingCharacter(
        invoicesList,
        "John Doe"
      );
      expect(matchingInvoices.length).toBe(1);
      const matchingInvoices2 = getInvoicesMatchingCharacter(
        invoicesList,
        "John Smith"
      );
      expect(matchingInvoices2.length).toBe(1);

      const matchingInvoices3 = getInvoicesMatchingCharacter(
        invoicesList,
        "Jane Johnson"
      );
      expect(matchingInvoices3.length).toBe(0);
    });
  });

  describe("all tests cases", () => {
    const expectedResult = [4, 7, 1, 3, 1, 0, 1, 1, 1, 1, 1, 0];
    const lowerCases = [
      "j",
      "a",
      "jane",
      "john",
      "john doe",
      "john smith",
      "jane smith",
      "bob johnson",
      "alice brown",
      "charlie white",
      "eva davis",
      "rene cotty",
    ];
    const upperCases = [
      "J",
      "A",
      "Jane",
      "John",
      "John Doe",
      "John Smith",
      "Jane Smith",
      "Bob Johnson",
      "Alice Brown",
      "Charlie White",
      "Eva Davis",
      "Rene Cotty",
    ];
    for (const testCase of lowerCases) {
      it(`[LOWERCASE] returns the list of invoices matching the customer ${testCase}`, () => {
        expect(
          getInvoicesMatchingCharacter(exampleInvoices, testCase).length
        ).toBe(expectedResult[lowerCases.indexOf(testCase)]);
      });
    }
    for (const testCase of upperCases) {
      it(`[UPPERCASE] returns the list of invoices matching the customer ${testCase}`, () => {
        expect(
          getInvoicesMatchingCharacter(exampleInvoices, testCase).length
        ).toBe(expectedResult[upperCases.indexOf(testCase)]);
      });
    }
  });
});

describe("getInvoicesByStatus", () => {
  describe("given test cases", () => {
    const exampleInvoices = [
      {
        id: 1,
        number: "INV001",
        status: "accepted",
        // other properties...
      },
      {
        id: 2,
        number: "INV002",
        status: "pending",
        // other properties...
      },
      {
        id: 3,
        number: "INV002",
        status: "rejected",
        // other properties...
      },
      {
        id: 4,
        number: "INV002",
        status: "pending",
        // other properties...
      },
    ];

    it("returns the list of invoices ordered by status", () => {
      const invoices = getInvoicesByStatus(exampleInvoices);
      expect(invoices[0].status).toBe("accepted");
      expect(invoices[1].status).toBe("pending");
      expect(invoices[2].status).toBe("pending");
      expect(invoices[3].status).toBe("rejected");
    });
  });
  describe("all tests cases", () => {
    it("returns the list of invoices ordered by status", () => {
      const invoices = getInvoicesByStatus(exampleInvoices);
      expect(invoices[0].status).toBe("accepted");
      expect(invoices[1].status).toBe("accepted");
      expect(invoices[2].status).toBe("accepted");
      expect(invoices[3].status).toBe("accepted");
      expect(invoices[4].status).toBe("pending");
      expect(invoices[5].status).toBe("pending");
      expect(invoices[6].status).toBe("pending");
      expect(invoices[7].status).toBe("pending");
      expect(invoices[8].status).toBe("rejected");
      expect(invoices[9].status).toBe("rejected");
    });
  });
});

describe("getInvoices", () => {
  it("returns the list of invoices", async () => {
    const invoices = await getInvoices();
    expect(invoices.length).toBe(10);
  });
});
