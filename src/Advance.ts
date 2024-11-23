interface Model<TData, TMethods> {
  data: TData;
  methods: TMethods;
}

interface IeUser {
  firstNam: string;
  lastNam: string;
}
interface IMethods {
  getFullName(): string;
}

type model = Model<IeUser, IMethods>;

class MohiUser implements model {
  data: IeUser;
  methods: IMethods;
  constructor(firstNam: string, lastNam: string) {
    this.data = { firstNam, lastNam};
    this.methods = {
      getFullName: () => `${this.data.firstNam} ${this.data.lastNam}`,
    };
  }
  get firstNam(): string {
    return this.data.firstNam;
  }
  get lastNam(): string {
    return this.data.lastNam;
  }
}


const newUser = new MohiUser('Mohi', 'Uddin');
newUser.methods.getFullName();
console.log(newUser.methods.getFullName())