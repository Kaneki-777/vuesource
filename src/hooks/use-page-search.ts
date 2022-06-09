/*
 * @Desc:
 * @version:
 * @Date: 2022-06-09 18:28:32
 * @LastEditTime: 2022-06-09 18:31:40
 */
import { ref } from 'vue'
import PageContent from '@/components/page-content'

export function usePageSearch() {
  const pageContentRef = ref<InstanceType<typeof PageContent>>()
  const handleResetClick = () => {
    pageContentRef.value?.getPageData()
  }

  const handleQueryClick = (queryInfo: any) => {
    pageContentRef.value?.getPageData(queryInfo)
    console.log(queryInfo)
  }
  return [pageContentRef, handleResetClick, handleQueryClick]
}
