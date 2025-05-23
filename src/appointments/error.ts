export class AppoinmentAlreadyExistsError extends Error {
  constructor(examId: string) {
    super(`Appoinment with examId ${examId} already exists`);
    this.name = 'AppoinmentAlreadyExistsError';
  }
}
