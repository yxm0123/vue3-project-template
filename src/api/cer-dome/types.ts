// 此页面写ts接口
export interface HttpResponse<T> {
  status: number
  statusText: string
  data: T
}
