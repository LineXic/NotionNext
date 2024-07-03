import { siteConfig } from '@/lib/config'
import SocialButton from './SocialButton'

const Footer = ({ title }) => {
  const d = new Date()
  const currentYear = d.getFullYear()
  const since = siteConfig('SINCE')
  const copyrightDate =
    parseInt(since) < currentYear ? since + '-' + currentYear : currentYear

  return (
    <footer className='relative flex-shrink-0 bg-white dark:bg-[#1a191d] justify-center text-center m-auto w-full leading-6  text-gray-600 dark:text-gray-100 text-sm'>
      {/* 颜色过度区 */}
      <div
        id='color-transition'
        className='h-32 bg-gradient-to-b from-[#f7f9fe] to-white  dark:bg-[#1a191d] dark:from-inherit dark:to-inherit'
      />

      {/* 社交按钮 */}
      <div className='w-full h-24'>
        <SocialButton />
      </div>

      <br />

      {/* 底部页面信息 */}


<img src="https://icp.gov.moe/images/ico64.png" width="20" height="20"><a href="https://icp.gov.moe/?keyword=20240181" target="_blank">萌ICP备20240181号</a><br>
<span id="sitetime"></span>
<script language=javascript>
    function siteTime(){
        window.setTimeout("siteTime()", 1000);
        var seconds = 1000;
        var minutes = seconds * 60;
        var hours = minutes * 60;
        var days = hours * 24;
        var years = days * 365;
        var today = new Date();
        var todayYear = today.getFullYear();
        var todayMonth = today.getMonth()+1;
        var todayDate = today.getDate();
        var todayHour = today.getHours();
        var todayMinute = today.getMinutes();
        var todaySecond = today.getSeconds();
        /* Date.UTC() -- 返回date对象距世界标准时间(UTC)1970年1月1日午夜之间的毫秒数(时间戳)
        year - 作为date对象的年份，为4位年份值
        month - 0-11之间的整数，做为date对象的月份
        day - 1-31之间的整数，做为date对象的天数
        hours - 0(午夜24点)-23之间的整数，做为date对象的小时数
        minutes - 0-59之间的整数，做为date对象的分钟数
        seconds - 0-59之间的整数，做为date对象的秒数
        microseconds - 0-999之间的整数，做为date对象的毫秒数 */
        var t1 = Date.UTC(2023,09,02,00,00,00); //北京时间2016-12-1 00:00:00
        var t2 = Date.UTC(todayYear,todayMonth,todayDate,todayHour,todayMinute,todaySecond);
        var diff = t2-t1;
        var diffYears = Math.floor(diff/years);
        var diffDays = Math.floor((diff/days)-diffYears*365);
        var diffHours = Math.floor((diff-(diffYears*365+diffDays)*days)/hours);
        var diffMinutes = Math.floor((diff-(diffYears*365+diffDays)*days-diffHours*hours)/minutes);
        var diffSeconds = Math.floor((diff-(diffYears*365+diffDays)*days-diffHours*hours-diffMinutes*minutes)/seconds);
        document.getElementById("sitetime").innerHTML="匍匐爬行"+diffYears+" 年 "+diffDays+" 天 "+diffHours+" 小时 "+diffMinutes+" 分钟 "+diffSeconds+" 秒";
    }
    siteTime();
</script>
<br>


                    Copyright &copy; {{ site.title }} {{ site.time | date: '%Y' }}
                    <br>
                    Power by <a href="https://linexic.top/">LineXic</a> | 站点 <a href="https://linexic.top/feed.xml">RSS</a><br>
                    <a href="https://blog.csdn.net/m0_73230319?">
  <img width="25" src="https://ts1.cn.mm.bing.net/th/id/R-C.2a932441dd0f785a3d2813c6198998dd?rik=yW78wW2nkdrw8Q&riu=http%3a%2f%2fpic.2265.com%2fupload%2f2017-7%2f201772598294888.png&ehk=ZyTimiwbIKnzPImq7nY8plTTZKjQtBktmyUef%2b4WI4U%3d&risl=&pid=ImgRaw&r=0"alt="CSDN"  />
</a>
||
 <a href="http://afdian.net/a/LineXic">
  <img width="25" src="https://tse1-mm.cn.bing.net/th/id/OIP-C.P7Tlj6hqpuSbLQ1AqQ8mkQHaHa?dpr=3&pid=ImgDetMain"alt="爱发电"  />
</a>
||
<a href="https://space.bilibili.com/1015205011">
  <img width="25" src="https://ts1.cn.mm.bing.net/th/id/R-C.5f7657549f4bd16d08b56ccad794f01a?rik=%2bXBzOkKWIBMU8A&riu=http%3a%2f%2fwww.kuaipng.com%2fUploads%2fpic%2fw%2f2020%2f07-20%2f89190%2fwater_89190_698_698_.png&ehk=b6FaBHz%2bTBstG7fZg%2fGSVXCcCSqOw3pUcMIZr6QUdZg%3d&risl=&pid=ImgRaw&r=0"alt="bilibili"  />
</a>


      <div
        id='footer-bottom'
        className='w-full h-20 flex flex-col p-3 lg:flex-row justify-between px-6 items-center bg-[#f1f3f7] dark:bg-[#21232A] border-t dark:border-t-[#3D3D3F]'>
        <div id='footer-bottom-left'>
          NotionNext {siteConfig('VERSION')} <i className='fas fa-copyright' />{' '}
          {`${copyrightDate}`} <i className='mx-1 animate-pulse fas fa-heart' />{' '}
          <a
            href={siteConfig('LINK')}
            className='underline font-bold dark:text-gray-300 '>
            {siteConfig('AUTHOR')}
          </a>
          .
        </div>

        <div id='footer-bottom-right'>
          {siteConfig('BEI_AN') && (
            <>
              <i className='fas fa-shield-alt' />{' '}
              <a href='https://beian.miit.gov.cn/' className='mr-2'>
                {siteConfig('BEI_AN')}
              </a>
            </>
          )}

          <span className='hidden busuanzi_container_site_pv'>
            <i className='fas fa-eye' />
            <span className='px-1 busuanzi_value_site_pv'> </span>{' '}
          </span>
          <span className='pl-2 hidden busuanzi_container_site_uv'>
            <i className='fas fa-users' />{' '}
            <span className='px-1 busuanzi_value_site_uv'> </span>{' '}
          </span>

          {/* <h1 className='text-xs pt-4 text-light-400 dark:text-gray-400'>{title} {siteConfig('BIO') && <>|</>} {siteConfig('BIO')}</h1> */}
        </div>
      </div>
    </footer>
  )
}

export default Footer
