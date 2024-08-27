import http from 'k6/http';
import {check, sleep} from 'k6';
import {htmlReport} from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";
import {textSummary} from "https://jslib.k6.io/k6-summary/0.0.1/index.js";

const baseUrl = "https://dev.peppes.no/api/user"; //Kaplan baseUrl for Test/Stage env.
const endPoint = "/getOrCreate";
let payload = JSON.stringify({
   //if there is any data to post
})
export const options = {
    vus: 2000,
    duration: '30s',
};

export default function () {
    const res = http.get(baseUrl + endPoint, {

        headers: {
            'access-control-allow-origin':'*',
            'Content-Type': 'application/json',
            'Authorization': `Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6Imw3anYwSll2NGxsVUZMYkdHRDJVYXBCOFBvYlhkWGF4SzNDU0hkMWczSk0iLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiJiMTE3ZDMxZC04MjJhLTQyYjktYjcxMy1mNTJlOGI2NWY3MmUiLCJpc3MiOiJodHRwczovL3BlcHBlc2Vjb21kZXYuYjJjbG9naW4uY29tLzU0NDRkN2EyLWRmMWYtNDdkNC1iMGFmLTg1YjI3ZDYzOTZiYS92Mi4wLyIsImV4cCI6MTcyNDc1Nzk1OSwibmJmIjoxNzI0NzU0MzU5LCJpZHAiOiJodHRwczovL2FwaXRlc3QudmlwcHMubm8vYWNjZXNzLW1hbmFnZW1lbnQtMS4wL2FjY2Vzcy8iLCJpZGVudGl0eVByb3ZpZGVyQWNjZXNzVG9rZW4iOiJ0amdsY243RUk3UVdKTnpwYm4wa3ZjWHZ0S3NVWXNzbWdlQVJNdzQ3LTlMLWZwekU2QlRpblhZY2NBOVZ3STJONUZodGJ0U29MRzVhczBVZzAyTXJhdE9WUDgtRkFObGpaMHpvRVdQSUlnMFhPZWVpaUxFTHpjNEVDLWF6MXZIWiIsInN1YiI6ImM3YmZiZGVmLTIyYWItNGFkOC1hMmQ0LWM1MjViZDk1MGM1ZCIsIm5hbWUiOiJUZXN0IFVzZXIiLCJnaXZlbl9uYW1lIjoiVGVzdCIsImZhbWlseV9uYW1lIjoiVXNlciIsImVtYWlsIjoiaW10aXlhei5ob3F1ZUBicmFpbnN0YXRpb24tMjMuY29tIiwicGhvbmVOdW1iZXIiOiI0NzQwMjkwODMzIiwidGlkIjoiNTQ0NGQ3YTItZGYxZi00N2Q0LWIwYWYtODViMjdkNjM5NmJhIiwibm9uY2UiOiIwMTkxOTM1ZS0zNmM4LTcyMGUtOTUyYS1lOTEwNGExNDdlZmMiLCJhenAiOiJiMTE3ZDMxZC04MjJhLTQyYjktYjcxMy1mNTJlOGI2NWY3MmUiLCJ2ZXIiOiIxLjAiLCJpYXQiOjE3MjQ3NTQzNTl9.iQXW9x7hQcRbg_NtoF1MYmOA59WH4b9CqCo5dkmeoB9RuSl9tk6aAEfBKHXvUdU7IMft7DzkK4C8FiNIzHRPUCaQ3ps8XWWC1yeLZ3VOxZ7UhlZIc2tpeeRISgsI3JkHerJByt7QoKDmTknEv3RVZ_pJslaml5PKGeI4WgCSptQ2mRlGs_HAGfMrgRT69ezuB9sDyponyz2ucOczRG-r1YsGAQj30QjAIM-8jFHd9h5HuNwQeuBPsNHaaceRDP9P8aK0UK8GhxF99a0CgAS95O1SMFH4cs_TBWZ5fsRzQtUE4HxzHV8UTj_XHSHImnLDRxbAocsjn2THjJmCqmJP5Q`
        }
    })
    console.log(res.status_text)
    check(res, {
        'is status 200': (r) => r.status === 200,
    });
    sleep(1);
}

export function handleSummary(data) {
    return {
        "result.html": htmlReport(data),
        stdout: textSummary(data, {indent: " ", enableColors: true}),
    };
}
