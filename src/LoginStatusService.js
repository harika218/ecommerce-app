import { Subject } from "rxjs";

const subject = new Subject();

export const loginStatusService = {
    setStatus: (status) => subject.next(status),
    getStatus: () => subject.asObservable()
}