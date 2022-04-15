<template>
  <div>
    <div class="row mt-3">
      <div class="col-12 mt-3">
        <div class="container-lo">
          <b-container fluid>
            <b-row class="mb-3 d-none d-lg-block d-md-block d-xl-block d-flex justify-content-end">
              <b-col cols="4" md="4">
              </b-col>
              <b-col cols="7" class="ml-4 pl-5 d-flex justify-content-end" md="7">
                <select class="form-select form-select-lg mb-3" style="width: auto;" aria-label=".form-select-lg example">
                  <option selected>Privacy Policy</option>
                  <option value="1">User Agreement</option>
                  <option value="2">Content Policy</option>
                  <option value="3">Three</option>
                </select>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="12" md="4" class="pr-3 text-left text-md-right">
                <div class="position-relative text-12">
                  <b-list-group v-b-scrollspy:listgroup-ex>
                    <b-list-group-item href="#list-item-1" @click.stop="scrollInView($event)" class="border-0 text-18">Summary </b-list-group-item>
                    <b-list-group-item href="#list-item-2" @click.stop="scrollInView($event)" class="border-0 text-18">Welcome</b-list-group-item>
                    <b-list-group-item href="#list-item-3" @click.stop="scrollInView($event)" class="border-0 text-18">Definitions</b-list-group-item>
                    <b-list-group-item href="#list-item-4" @click.stop="scrollInView($event)" class="border-0 text-18">Types of Information We Receive From You & How We Get It</b-list-group-item>
                    <b-list-group-item href="#list-item-5" @click.stop="scrollInView($event)" class="border-0 text-18">How We Use Information We Receive From You?</b-list-group-item>
                    <b-list-group-item href="#list-item-6" @click.stop="scrollInView($event)" class="border-0 text-18">When May We Share Your Information?</b-list-group-item>
                    <b-list-group-item href="#list-item-7" @click.stop="scrollInView($event)" class="border-0 text-18">How Do We Protect Your Personal Information?</b-list-group-item>
                    <b-list-group-item href="#list-item-8" @click.stop="scrollInView($event)" class="border-0 text-18">How Long Do We Keep Your Data?</b-list-group-item>
                    <b-list-group-item href="#list-item-9" @click.stop="scrollInView($event)" class="border-0 text-18">Your rights</b-list-group-item>
                    <b-list-group-item href="#list-item-10" @click.stop="scrollInView($event)" class="border-0 text-18">Changes to This Privacy Policy</b-list-group-item>
                    <b-list-group-item href="#list-item-11" @click.stop="scrollInView($event)" class="border-0 text-18">Other important Information</b-list-group-item>
                    <b-list-group-item href="#list-item-12" @click.stop="scrollInView($event)" class="border-0 text-18">Contact Us</b-list-group-item>
                  </b-list-group>
                  <br>
                  <select class="form-select mx-auto form-select-lg mb-3 float-md-right" style="width: auto;" aria-label=".form-select-lg example">
                    <option selected>Revisions</option>
                  </select>
                </div>
              </b-col>
              <b-row class="mb-3 mt-3 d-block d-md-none d-lg-none">
                <b-col cols="12" md="4">
                </b-col>
                <b-col cols="12" class="pl-5" md="7">
                  <select class="form-select mx-auto form-select-lg mb-3" style="width: auto;" aria-label=".form-select-lg example">
                    <option selected>Privacy Policy</option>
                    <option value="1">User Agreement</option>
                    <option value="2">Content Policy</option>
                    <option value="3">Three</option>
                  </select>
                </b-col>
              </b-row>
              <b-col cols="12" md="7" class="pl-5 text-justify">
                <div id="listgroup-ex" style="position:relative; overflow-y:auto; height:800px">
                  <h2 class="text-center">Terms of Use</h2>
                  <h5 id="list-item-1">Summary </h5>
                    <p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><em><span style='font-size:11px;font-family:"Times New Roman",serif;'>Disclaimer:</span></em><em><span style='font-size:11px;font-family:"Times New Roman",serif;'>&nbsp;This summary is not a part of the Terms of Use and is not a legal document. It is simply a handy reference for understanding the full terms. Think of it as the user-friendly interface to the legal language of our Terms of Use.</span></em></p>
                    <p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style='font-family:"Times New Roman",serif;'>&nbsp;</span></p>
                    <p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><strong><span style='font-family:"Times New Roman",serif;'>Because we believe that you shouldn&rsquo;t have to provide personal information to&nbsp;</span></strong><strong><span style='font-family:"Times New Roman",serif;'>access</span></strong><strong><span style='font-family:"Times New Roman",serif;'>, you may:</span></strong><span style='font-family:"Times New Roman",serif;'>&nbsp;</span></p>
                    <ul style="list-style-type: disc;margin-left:26.5px;">
                        <li><span style='font-family:"Times New Roman",serif;'>Access free content on Odaaay</span><span style='font-family:"Times New Roman",serif;'>&nbsp;without registering an account.</span></li>
                        <li><span style='font-family:"Times New Roman",serif;'>Register for an account without providing an email address or real name.</span></li>
                    </ul>
                    <p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><strong><span style='font-family:"Times New Roman",serif;'>Because we want to understand how&nbsp;</span></strong><strong><span style='font-family:"Times New Roman",serif;'>our services&nbsp;</span></strong><strong><span style='font-family:"Times New Roman",serif;'>are used so we can make them better for you, we collect some information when you:</span></strong><span style='font-family:"Times New Roman",serif;'>&nbsp;</span></p>
                    <ul style="list-style-type: disc;margin-left:26.5px;">
                        <li><span style='font-family:"Times New Roman",serif;'>Submit content.</span></li>
                        <li><span style='font-family:"Times New Roman",serif;'>Register an account or update your</span><span style='font-family:"Times New Roman",serif;'>&nbsp;account information</span><span style='font-family:"Times New Roman",serif;'>.</span></li>
                        <li><span style='font-family:"Times New Roman",serif;'>Use our services and products.</span></li>
                        <li><span style='font-family:"Times New Roman",serif;'>Send us emails or participate in a survey or give feedback.</span></li>
                    </ul>
                    <p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><strong><span style='font-family:"Times New Roman",serif;'>We are committed to:</span></strong><span style='font-family:"Times New Roman",serif;'>&nbsp;</span></p>
                    <ul style="list-style-type: disc;margin-left:26.5px;">
                        <li><span style='font-family:"Times New Roman",serif;'>Describing how your information may be used or shared in this Privacy Policy.</span></li>
                        <li><span style='font-family:"Times New Roman",serif;'>Using reasonable measures to keep your information secure.</span></li>
                        <li><span style='font-family:"Times New Roman",serif;'>Never selling your information or sharing it with third parties for marketing purposes.</span></li>
                        <li><span style='font-family:"Times New Roman",serif;'>Only sharing your information in limited circumstances, such as to improve&nbsp;</span><span style='font-family:"Times New Roman",serif;'>our services</span><span style='font-family:"Times New Roman",serif;'>, to comply with the law, or to protect you and others.</span></li>
                        <li><span style='font-family:"Times New Roman",serif;'>Retaining your data for the shortest possible time that is consistent with maintaining, understanding, and improving&nbsp;</span><span style='font-family:"Times New Roman",serif;'>our services</span><span style='font-family:"Times New Roman",serif;'>, and our obligations under applicable law.</span></li>
                    </ul>
                    <p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><strong><span style='font-family:"Times New Roman",serif;'>Be aware:</span></strong><span style='font-family:"Times New Roman",serif;'>&nbsp;</span></p>
                    <ul style="list-style-type: disc;margin-left:26.5px;">
                        <li><span style='font-family:"Times New Roman",serif;'>Any content you&nbsp;</span><span style='font-family:"Times New Roman",serif;'>add</span><span style=";">&nbsp;or any change you make&nbsp;</span><span style='font-family:"Times New Roman",serif;'>to your content on Odaaay</span><span style='font-family:"Times New Roman",serif;'>&nbsp;will be publicly available.</span></li>
                        <li><span style='font-family:"Times New Roman",serif;'>For the protection of&nbsp;</span><span style='font-family:"Times New Roman",serif;'>Odaaay</span><span style=";">&nbsp;and other users, if you do not agree with this Privacy Policy, you may not use the&nbsp;</span><span style='font-family:"Times New Roman",serif;'>website</span><span style='font-family:"Times New Roman",serif;'>.</span></li>
                    </ul>
                  <h5 id="list-item-2">Welcome</h5>
                    <p style='margin-right:0cm;margin-left:0cm;font-size:16px;font-family:"Calibri",sans-serif;margin:0cm;'>To help you achieve your goals and make our services safer, more usable, and more beneficial, we cannot work without gathering, sharing, and analyzing information about our users.</p>
                    <p style='margin-right:0cm;margin-left:0cm;font-size:16px;font-family:"Calibri",sans-serif;margin:0cm;'>We believe that information-gathering and use should go hand-in-hand with transparency. This Privacy Policy explains how we, Odaaay, collects, uses, and shares information we receive from you through your use of our services. It is essential to understand that, by using any of our services, you consent to the collection, transfer, processing, storage, disclosure, and use of your information as described in this Privacy Policy. That means that reading this Policy carefully is important.</p>
                    <p style='margin-right:0cm;margin-left:0cm;font-size:16px;font-family:"Calibri",sans-serif;margin:0cm;'>We do not sell or rent your Personal Information, nor do we give it to others to sell you anything. We use it to figure out how to make Odaaay more engaging and accessible, to see which ideas work, to pay and verify the legitimacy of your creators, and to make content more accessible. Put simply: we use this information to make Odaaay better for you.</p>
                  <h5 id="list-item-3">Definitions</h5>
                    <p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style='font-family:"Times New Roman",serif;'>E</span><span style='font-family:"Times New Roman",serif;'>veryone (not just lawyers) should be able to easily understand how and why their information is collected and used, we use common language instead of more formal terms throughout this Policy. To help ensure your understanding of some particular key terms here is a</span><span style='font-family:"Times New Roman",serif;'>re the&nbsp;</span><span style='font-family:"Times New Roman",serif;'>translations:&nbsp;</span></p>
                    <div style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'>
                        <ul style="margin-bottom:0cm;list-style-type: disc;">
                            <li style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><strong><span style='font-family:"Times New Roman",serif;'>&quot;</span></strong><strong><span style='font-family:"Times New Roman",serif;'>Odaaay</span></strong><strong><span style='font-family:"Times New Roman",serif;'>&nbsp;&quot;&nbsp;</span></strong><strong><span style='font-family:"Times New Roman",serif;'>/</span></strong><strong><span style='font-family:"Times New Roman",serif;'>&nbsp;&quot;we&quot; / &quot;us&quot; / &quot;our&quot;&nbsp;</span></strong><strong><span style='font-family:"Times New Roman",serif;'>-&nbsp;</span></strong><span style='font-family:"Times New Roman",serif;'>Odaaay</span><span style='font-family:"Times New Roman",serif;'>, the&nbsp;</span><span style='font-family:"Times New Roman",serif;'>startup operating the Odaaay domain, website and services.</span></li>
                        </ul>
                    </div>
                    <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:36.0pt;font-size:16px;font-family:"Calibri",sans-serif;'><span style='font-family:"Times New Roman",serif;'>&nbsp;</span></p>
                    <div style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'>
                        <ul style="margin-bottom:0cm;list-style-type: disc;">
                            <li style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><strong><span style='font-family:"Times New Roman",serif;'>&quot;Website&quot; / &quot;our services&quot;&nbsp;</span></strong><strong><span style='font-family:"Times New Roman",serif;'>-&nbsp;</span></strong><span style='font-family:"Times New Roman",serif;'>The Odaaay</span><span style='font-family:"Times New Roman",serif;'>&nbsp;website and services (regardless of language), including our&nbsp;</span><span style='font-family:"Times New Roman",serif;'>recommendation system</span><span style='font-family:"Times New Roman",serif;'>,&nbsp;</span><span style='font-family:"Times New Roman",serif;'>translation, summary, payment</span><span style='font-family:"Times New Roman",serif;'>&nbsp;as well as mobile applications, Application Programming Interfaces (APIs), emails, and notifications; excluding, however, sites and services listed in the &quot;What This Privacy Policy Doesn&apos;t Cover&quot; section below.&nbsp;</span></li>
                        </ul>
                    </div>
                    <p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style='font-family:"Times New Roman",serif;'>&nbsp;</span></p>
                    <div style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'>
                        <ul style="margin-bottom:0cm;list-style-type: disc;">
                            <li style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><strong><span style='font-family:"Times New Roman",serif;'>&quot;this Policy&quot; / &quot;this Privacy Policy&quot;&nbsp;</span></strong><strong><span style='font-family:"Times New Roman",serif;'>-&nbsp;</span></strong><span style='font-family:"Times New Roman",serif;'>This document, entitled the &quot;</span><span style='font-family:"Times New Roman",serif;'>Odaaay</span><span style='font-family:"Times New Roman",serif;'>&nbsp;Privacy Policy&quot;.&nbsp;</span></li>
                        </ul>
                    </div>
                    <p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style='font-family:"Times New Roman",serif;'>&nbsp;</span></p>
                    <div style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'>
                        <ul style="margin-bottom:0cm;list-style-type: disc;">
                            <li style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><strong><span style='font-family:"Times New Roman",serif;'>&quot;contributions&quot;</span></strong><strong><span style='font-family:"Times New Roman",serif;'>&nbsp;- &nbsp;</span></strong><span style='font-family:"Times New Roman",serif;'>Content you&nbsp;</span><span style='font-family:"Times New Roman",serif;'>submit,&nbsp;</span><span style='font-family:"Times New Roman",serif;'>add</span><span style='font-family:"Times New Roman",serif;'>,</span><span style=";">&nbsp;or chang</span><span style='font-family:"Times New Roman",serif;'>e</span><span style='font-family:"Times New Roman",serif;'>&nbsp;</span><span style='font-family:"Times New Roman",serif;'>on the website</span><span style='font-family:"Times New Roman",serif;'>.&nbsp;</span></li>
                        </ul>
                    </div>
                    <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:36.0pt;font-size:16px;font-family:"Calibri",sans-serif;'><strong><span style='font-family:"Times New Roman",serif;'>&nbsp;</span></strong></p>
                    <ul style="list-style-type: disc;">
                        <li><strong><span style='font-family:"Times New Roman",serif;'>&quot;Personal information&quot;</span></strong><strong><span style='font-family:"Times New Roman",serif;'>&nbsp;- &nbsp;</span></strong><span style='font-family:"Times New Roman",serif;'>Information you provide us or information we collect that could be used to personally identify you. To be clear, while we do not necessarily collect all of the following types of information, we consider at least the following to be &quot;personal information&quot; if it is otherwise nonpublic and can be used to identify you:</span>
                            <ol style="list-style-type: circle;">
                                <li><span style='font-family:"Times New Roman",serif;'>your real name, address, phone number, email address, password, identification number on government-issued ID, IP address, user-agent information, payment account number;</span></li>
                                <li><span style='font-family:"Times New Roman",serif;'>when associated with one of the items in subsection (a), any sensitive data such as date of birth, gender, sexual orientation, racial or ethnic origins, marital or familial status, medical conditions or disabilities, political affiliation, and religion.</span></li>
                            </ol>
                        </li>
                    </ul>
                    <p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style='font-family:"Times New Roman",serif;'>&nbsp;</span></p>
                    <div style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'>
                        <ul style="margin-bottom:0cm;list-style-type: disc;">
                            <li style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><strong><span style='font-family:"Times New Roman",serif;'>&quot;third party&quot; / &quot;third parties&quot;&nbsp;</span></strong><strong><span style=";">-&nbsp;</span></strong><span style='font-family:"Times New Roman",serif;'>Individuals, entities, websites, services, products, and applications that are not controlled, managed, or operated by&nbsp;</span><span style='font-family:"Times New Roman",serif;'>Odaaay</span><span style='font-family:"Times New Roman",serif;'>. This includes other&nbsp;</span><span style='font-family:"Times New Roman",serif;'>Odaaay</span><span style='font-family:"Times New Roman",serif;'>&nbsp;users and independent organizations or groups</span><span style='font-family:"Times New Roman",serif;'>.</span><span style='font-family:"Times New Roman",serif;'>&nbsp;</span></li>
                        </ul>
                    </div>
                    <p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><strong><span style='font-family:"Times New Roman",serif;'>&nbsp;</span></strong></p>
                  <h5 id="list-item-4">Types of Information We Receive From You & How We Get It</h5>
                    <p style='margin-right:0cm;margin-left:0cm;font-size:16px;font-family:"Calibri",sans-serif;margin:0cm;'><span style='font-family:"Times New Roman",serif;'>When you</span><span style='font-family:"Times New Roman",serif;'>&nbsp;add, upload, share any content on Odaaay</span><span style='font-family:"Times New Roman",serif;'>, you are creating a permanent</span><span style='font-family:"Times New Roman",serif;'>&nbsp;</span><span style='font-family:"Times New Roman",serif;'>record of every piece of content added, removed, or altered by you. We may use your&nbsp;</span><span style='font-family:"Times New Roman",serif;'>content</span><span style='font-family:"Times New Roman",serif;'>, either aggregated with the&nbsp;</span><span style='font-family:"Times New Roman",serif;'>content</span><span style='font-family:"Times New Roman",serif;'>&nbsp;of others or individually, to create new features or data-related products for you or to learn more about how&nbsp;</span><span style='font-family:"Times New Roman",serif;'>our services</span><span style='font-family:"Times New Roman",serif;'>&nbsp;are used</span><span style='font-family:"Times New Roman",serif;'>.</span></p>
                    <p style='margin-right:0cm;margin-left:0cm;font-size:16px;font-family:"Calibri",sans-serif;margin:0cm;'><span style='font-family:"Times New Roman",serif;'>&nbsp;</span></p>
                    <p style='margin-right:0cm;margin-left:0cm;font-size:16px;font-family:"Calibri",sans-serif;margin:0cm;'>You are not required to create an account to read public content. If you want to create an account, in most cases we require only a username and a phone number. Your phone number is necessary in case you wish to recover your account.&nbsp;</p>
                    <p style='margin-right:0cm;margin-left:0cm;font-size:16px;font-family:"Calibri",sans-serif;margin:0cm;'>To gain a better understanding of the demographics of our users, to localize our services, and to learn how we can improve our services, we may ask you for more demographic information, such as gender or age, about yourself. We will tell you if such information is intended to be public or private so that you can make an informed decision about whether you want to provide us with that information. Providing such information is always completely optional. If you don&apos;t want to, you don&apos;t have to&mdash;it&apos;s as simple as that.</p>
                    <p style='margin-right:0cm;margin-left:0cm;font-size:16px;font-family:"Calibri",sans-serif;margin:0cm;'>If you consent, we can use GPS (and other technologies commonly used to determine location) to show you more relevant content. We keep information obtained by these technologies confidential, except as provided in this Policy.</p>
                    <p style='margin-right:0cm;margin-left:0cm;font-size:16px;font-family:"Calibri",sans-serif;margin:0cm;'><span style='font-family:"Times New Roman",serif;'>Sometimes, we automatically receive location data from your device. For example, if you want to upload a pho</span><span style='font-family:"Times New Roman",serif;'>to</span><span style='font-family:"Times New Roman",serif;'>, we may receive metadata, such as the place and time you took the photo, automatically from your device. Please be aware that, unlike location information collected using GPS signals described above, the default setting on your mobile device typically includes the metadata in your photo or video upload to&nbsp;</span><span style='font-family:"Times New Roman",serif;'>Odaaay</span><span style='font-family:"Times New Roman",serif;'>. If you do not want metadata sent to us and made public at the time of your upload, please change your settings on your device.&nbsp;</span></p>
                    <p style='margin-right:0cm;margin-left:0cm;font-size:16px;font-family:"Calibri",sans-serif;margin:0cm;'>When you visit Odaaay, we automatically receive the IP address of the device (or your proxy server) you are using to access the Internet, which could be used to infer your geographical location.</p>
                    <p style='margin-right:0cm;margin-left:0cm;font-size:16px;font-family:"Calibri",sans-serif;margin:0cm;'>We want to make our services&nbsp;better for you by learning more about how you use them. Examples of this might include how often you visit the Website, what you like, what you find helpful, how you get to the website, and whether you would use a helpful feature more if we explained it differently. We also want this Policy and our practices to reflect our community&apos;s values. For this reason, we keep information related to your use of our services confidential, except as provided in this Policy.</p>
                    <p style='margin-right:0cm;margin-left:0cm;font-size:16px;font-family:"Calibri",sans-serif;margin:0cm;'>Because of how browsers work, we receive some information automatically when you visit Odaaay. This includes when you use an online tool on a third-party site that loads information coming from the Odaaay. This information includes the type of device you are using (possibly including unique device identification numbers, for some beta versions of our mobile applications), the type and version of your browser, your browser&apos;s language preference, the type and version of your device&apos;s operating system, in some cases the name of your internet service provider or mobile carrier, the website that referred you to Odaaay, which pages you request and visit, and the date and time of each request you make to Odaaay.</p>
                    <p style='margin-right:0cm;margin-left:0cm;font-size:16px;font-family:"Calibri",sans-serif;margin:0cm;'>Put simply, we use this information to enhance your experience. For example, we use this information to administer the sites, provide greater security, and fight vandalism; optimize mobile applications, customize content and set language preferences, test features to see what works, and improve performance; understand how users interact with our services, track and study the&nbsp;use of various features, gain understanding about the demographics, and analyze trends.</p>
                    <p style='margin-right:0cm;margin-left:0cm;font-size:16px;font-family:"Calibri",sans-serif;margin:0cm;'>We actively collect some types of information with a variety of commonly-used technologies. These generally include tracking pixels, JavaScript, and a variety of &quot;locally stored data&quot; technologies, such as cookies and local storage. These types of technologies may also be used in online tools on a third-party site that loads information from Odaaay. We realize that some of these technologies do not have the best reputation in town and can be used for less-than-noble purposes. So we want to be as clear as we can about why we use these methods and the type of information we collect with them.</p>
                    <p style='margin-right:0cm;margin-left:0cm;font-size:16px;font-family:"Calibri",sans-serif;margin:0cm;'>Depending on which technology we use, locally stored data may include text, Personal Information (like your IP address), and information about your use of Odaaay (like your username or the time of your visit). We use this information to make your experience with the website safer and better, to gain a greater understanding of user preferences and their interaction with Odaaay, and to generally improve our services. We will never use third-party cookies unless we get your permission to do so. If you ever come across a third-party data collection tool that has not been authorized by you (such as one that may have been mistakenly placed by another user or administrator), please report it to us at <a href="mailto:legal@odaaay.com">legal@odaaay.com</a>.</p>
                    <p style='margin-right:0cm;margin-left:0cm;font-size:16px;font-family:"Calibri",sans-serif;margin:0cm;'>Concerning cookies, we believe this data collection helps improve your user experience, but you may remove or disable some or all locally stored data through your browser settings, depending on your browser. While locally stored data may not be necessary to use our sites, some features will not function properly if you disable locally stored data.</p>
                    <p style='margin-right:0cm;margin-left:0cm;font-size:16px;font-family:"Calibri",sans-serif;margin:0cm;'>While the examples above concerning information about you collected through the use of data collection tools are kept confidential in accordance with this Policy, please note that some information about the actions taken by your username is made publicly available when you submit, share or upload content alongside actions taken by other users.</p>
                  <h5 id="list-item-5">How We Use Information We Receive From You</h5>
                    <p style='margin-right:0cm;margin-left:0cm;font-size:16px;font-family:"Calibri",sans-serif;margin:0cm;'>We and our service providers use your information for the legitimate purpose of pursuing our mission, including:</p>
                    <div style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'>
                        <ul style="margin-bottom:0cm;list-style-type: disc;margin-left:26px;">
                            <li style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'>Operating Odaaay, sharing your content, and administering our Services.</li>
                        </ul>
                    </div>
                    <ul style="margin-bottom:0cm;" type="disc">
                        <ul style="margin-bottom:0cm;" type="circle">
                            <li style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;color:black;'><span style='font-family:"Times New Roman",serif;'>To help you share your knowledge with the world and add new features to our Services.</span></li>
                            <li style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;color:black;'><span style='font-family:"Times New Roman",serif;'>To arrange access to your account and provide you with related&nbsp;</span><span style='font-family:"Times New Roman",serif;'>services</span><span style='font-family:"Times New Roman",serif;'>.</span></li>
                            <li style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;color:black;'><span style='font-family:"Times New Roman",serif;'>To send administrative information to you, such as changes to our policies.</span></li>
                            <li style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;color:black;'><span style='font-family:"Times New Roman",serif;'>To allow you to send messages to another person if you choose to do so. Direct communications between users (such as messages sent through the &quot;Email this user&quot; feature), to the extent such communications are nonpublic and stored in or in transit through&nbsp;</span><span style='font-family:"Times New Roman",serif;'>Odaaay</span><span style='font-family:"Times New Roman",serif;'>&nbsp;systems, are kept confidential by us, except as provided in this Policy.</span></li>
                        </ul>
                    </ul>
                    <p style='margin-right:0cm;margin-left:0cm;font-size:16px;font-family:"Calibri",sans-serif;margin:0cm;'><span style="color:black;">We engage in these activities to manage our relationship with you because we have a legitimate interest and/or to comply with our legal obligations.</span></p>
                    <ul style="list-style-type: disc;">
                        <li><span style='font-family:"Times New Roman",serif;color:black;'>Providing customized Services.</span>
                            <ol style="list-style-type: circle;">
                                <li><span style='font-family:"Times New Roman",serif;color:black;'>To provide you custom content, notices</span><span style='font-family:"Times New Roman",serif;color:black;'>,</span><span style='font-family:"Times New Roman",serif;color:black;'>&nbsp;and settings and to enhance your experience&nbsp;</span><span style='font-family:"Times New Roman",serif;'>with Odaaay</span><span style='font-family:"Times New Roman",serif;color:black;'>.</span></li>
                            </ol>
                        </li>
                    </ul>
                    <p style='margin-right:0cm;margin-left:0cm;font-size:16px;font-family:"Calibri",sans-serif;margin:0cm;'><span style="color:black;">We will customize the Services, in some instances, with your consent; or in keeping with our legitimate interest.</span></p>
                    <ul style="list-style-type: disc;">
                        <li><span style='font-family:"Times New Roman",serif;color:black;'>Improving the&nbsp;</span><span style='font-family:"Times New Roman",serif;color:black;'>Website</span><span style="color:black;">&nbsp;and making your user experience safer and better.</span>
                            <ol style="list-style-type: circle;">
                                <li><span style='font-family:"Times New Roman",serif;'>To use your&nbsp;</span><span style='font-family:"Times New Roman",serif;'>content</span><span style='font-family:"Times New Roman",serif;'>, either aggregated with the public contributions of others or individually, to create new features or data-related products for you or to learn more about how the&nbsp;</span><span style='font-family:"Times New Roman",serif;'>website is</span><span style='font-family:"Times New Roman",serif;'>&nbsp;used.</span></li>
                                <li><span style='font-family:"Times New Roman",serif;'>To fight spam, identity theft, malware</span><span style='font-family:"Times New Roman",serif;'>,</span><span style='font-family:"Times New Roman",serif;'>&nbsp;and other kinds of abuse.</span></li>
                                <li><span style='font-family:"Times New Roman",serif;'>To optimize mobile and other applications.</span></li>
                                <li><span style='font-family:"Times New Roman",serif;'>To test features to see what works, understand how users interact with the&nbsp;</span><span style='font-family:"Times New Roman",serif;'>Website</span><span style='font-family:"Times New Roman",serif;'>, track and study&nbsp;</span><span style='font-family:"Times New Roman",serif;'>the&nbsp;</span><span style=";">use of various features, gain&nbsp;</span><span style='font-family:"Times New Roman",serif;'>an&nbsp;</span><span style='font-family:"Times New Roman",serif;'>understanding&nbsp;</span><span style='font-family:"Times New Roman",serif;'>of</span><span style=";">&nbsp;the demographics and analyze trends.</span></li>
                            </ol>
                        </li>
                    </ul>
                    <p style='margin-right:0cm;margin-left:0cm;font-size:16px;font-family:"Calibri",sans-serif;margin:0cm;'><span style='font-family:"Times New Roman",serif;'>We engage in these activities to further our legitimate interests and/or to comply with our legal obligations.&nbsp;</span></p>
                  <h5 id="list-item-6">When May We Share Your Information?</h5>
                    <ul style="list-style-type: disc;margin-left:26px;">
                        <li>
                            <h5 style='margin-right:0cm;margin-left:0cm;font-size:16px;font-family:"Times New Roman",serif;font-weight:bold;'>With Your Permission&nbsp;-&nbsp;We share your Personal Information for a particular purpose if you agree.</h5>
                        </li>
                        <li><strong>For Legal Reasons -</strong> We will access, use, preserve, and/or disclose your Personal Information if we reasonably believe it necessary to satisfy a valid and legally enforceable warrant, subpoena, court order, law or regulation, or other judicial or administrative order. However, if we believe that a particular request for disclosure of a user&apos;s information is legally invalid or an abuse of the legal system and the affected user does not intend to oppose the disclosure themselves, we will try our best to fight it. We are committed to notifying you via email at least ten (10) calendar days, when possible before we disclose your Personal Information in response to a legal demand. However, we may only provide notice if we are not legally restrained from contacting you, there is no credible threat to life or limb that is created or increased by disclosing the request, and you have provided us with an email address. Nothing in this Privacy Policy is intended to limit any legal objections or defenses you may have to a third party&rsquo;s request (whether it be civil, criminal, or governmental) to disclose your Personal Information. We recommend seeking the advice of legal counsel immediately if such a request is made involving you.</li>
                        <li>
                            <h5 style='margin-right:0cm;margin-left:0cm;font-size:16px;font-family:"Times New Roman",serif;font-weight:bold;'>If the organization is transferred - In the extremely unlikely event that ownership of all or substantially all of the Foundation changes, or we go through a reorganization (such as a merger, consolidation, or acquisition), consistent with our legitimate interest, we will continue to keep your Personal Information confidential, except as provided in this Policy, and provide notice to you via a notification&nbsp;on the website&nbsp;at least thirty (30) calendar days before any Personal Information is transferred or becomes subject to a different privacy policy.&nbsp;</h5>
                        </li>
                        <li><strong>To protect you, ourselves &amp; others -</strong> We, or particular users with certain administrative rights as described below, need to use and share your Personal Information if it is reasonably believed to be necessary to enforce or investigate potential violations of our Terms of Use, this Privacy Policy, or any other Odaaay policies. We may also need to access and share Personal Information to investigate and defend ourselves against legal threats or actions. We hope that this never comes up, but we may disclose your Personal Information if we believe that it&apos;s reasonably necessary to prevent imminent and serious bodily harm or death to a person or to protect our organization, employees, contractors, users, or the public. We may also disclose your Personal Information if we reasonably believe it necessary to detect, prevent, or otherwise assess and address potential spam, malware, fraud, abuse, unlawful activity, and security or technical concerns. &nbsp;</li>
                        <li><strong>To understand and experiment -</strong> The software that powers Odaaay depends on the contributions of a small group of software developers, who spend time writing and testing code to help it improve and evolve with our users&apos; needs. To facilitate their work, we give some developers limited access to systems that contain your Personal Information, but only as reasonably necessary for them to develop and contribute to the Website.</li>
                    </ul>
                    <p><span style='font-size:16px;font-family:"Calibri",sans-serif;'>Because you made it public &ndash; A</span><span style='font-size:16px;font-family:"Calibri",sans-serif;'>ny information you post publicly on the&nbsp;</span><span style='font-size:16px;font-family:"Calibri",sans-serif;'>website</span><span style='font-size:16px;font-family:"Calibri",sans-serif;'>&nbsp;is just that &ndash; public. For example, if you put your&nbsp;</span><span style='font-size:16px;font-family:"Calibri",sans-serif;'>name</span><span style='font-size:16px;font-family:"Calibri",sans-serif;'>&nbsp;</span><span style='font-size:16px;font-family:"Calibri",sans-serif;'>as your username</span><span style='font-size:16px;font-family:"Calibri",sans-serif;'>, that is public, and not specifically protected by this Policy. Please think carefully about your desired level of privacy before you disclose Personal Information on your user page or elsewhere.&nbsp;</span></p>
                  <h5 id="list-item-7">How Do We Protect Your Personal Information?</h5>
                    <p>
                        We strive to protect your Personal Information from unauthorized access, use, or disclosure. We use a variety of physical and technical measures, policies, and procedures (such as access control procedures, network firewalls, and physical security) designed to protect our systems and your Personal Information. Unfortunately, there's no such thing as completely secure data transmission or storage, so we can't guarantee that our security will not be breached (by technical measures or through violation of our policies and procedures). 
                    </p>
                  <h5 id="list-item-8">How Long Do We Keep Your Data?</h5>
                    <p>Once we receive Personal Information from you, we keep it for the shortest possible time that is consistent with the maintenance, understanding, and improvement of the website, and our obligations under applicable law. We retain information about you only for as long as reasonably necessary to fulfill the purposes for which it was collected.</p>
                  <h5 id="list-item-9">Your rights</h5>
                    <p>If you would like to request to access, update or restrict/object to the processing of Personal Information, or receive a copy of your Personal Information for purposes of transmitting it to another organization, you may contact us at  <a mailto="legal@odaaay.com">legal@odaaay.com</a>. We will respond to your request consistent with applicable law.</p>
                    <p>Please note also that you may be able to exercise some of these rights without our intervention. For example, if you are a registered user, you can access and update some Personal Information in your Preferences, as well as download your user account data. You may also manage what kinds of notifications you receive and how often you receive them by going to your Notifications Preferences. </p>
                  <h5 id="list-item-10">Changes to This Privacy Policy</h5>
                    <ul style="list-style-type: disc;margin-left:26px;">
                        <li>
                            <p id="isPasted" style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style='font-family:"Times New Roman",serif;'>Because things naturally change over time and we want to ensure our Privacy Policy accurately reflects our practices and the law, it may be necessary to modify this Privacy Policy from time to time. We reserve the right to do so in the following manner:&nbsp;</span></p>
                            <ul style="margin-bottom:0cm;" type="disc">
                                <li style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style='font-family:     "Times New Roman",serif;'>In the event of substantial changes, we will provide the proposed changes to our users in t</span><span style='font-family:"Times New Roman",serif;'>wo</span><span style='font-family:"Times New Roman",serif;'>&nbsp;(</span><span style='font-family:"Times New Roman",serif;'>2</span><span style='font-family:"Times New Roman",serif;'>) languages (</span><span style='font-family:"Times New Roman",serif;'>French &amp; English</span><span style='font-family:"Times New Roman",serif;'>) for an open comment period lasting at least thirty (30) calendar days.&nbsp;</span><span style='font-family:"Times New Roman",serif;'>Before</span><span style='font-family:"Times New Roman",serif;'>&nbsp;the start of any comment period, we will provide notice of such changes and the opportunity to comment via&nbsp;</span><span style='font-family:"Times New Roman",serif;'>a discussion channel created for this purpose</span><span style='font-family:     "Times New Roman",serif;'>.</span></li>
                                <li style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style='font-family:     "Times New Roman",serif;'>For minor changes, such as grammatical fixes, administrative or legal changes, or corrections of inaccurate statements, we will post the changes and, when possible, provide at least three (3) calendar&nbsp;</span><span style='font-family:"Times New Roman",serif;'>days</span><span style='font-family:"Times New Roman",serif;'>&nbsp;prior notice via&nbsp;</span><span style='font-family:"Times New Roman",serif;'>the website notification system.</span></li><span style='font-family:"Times New Roman",serif;'>We ask that you please review the most up-to-date version of our Privacy Policy. Your continued use of the&nbsp;</span><span style='font-family:"Times New Roman",serif;'>website</span><span style='font-family:"Times New Roman",serif;'>&nbsp;after any effective date of a subsequent version of this Privacy Policy constitutes acceptance of this Privacy Policy on your part.&nbsp;</span>
                            </ul>
                            <p style="margin:0cm;font-size:16px;font-family:&quot;Calibri&quot;,sans-serif;"></p>
                        </li>
                    </ul>
                  <h5 id="list-item-11">Other important Information</h5>
                    <ul style="list-style-type: disc;">
                        <li>For the protection of Odaaay&nbsp;and other users, if you do not agree with this Privacy Policy, you may not use the website and our services.</li>
                    </ul>
                    <ul style="list-style-type: disc;">
                        <li><span style='font-family:"Times New Roman",serif;'>We have</span><span style='font-family:"Times New Roman",serif;'>&nbsp;servers and data centers located&nbsp;</span><span style=";">all over the world</span><span style='font-family:"Times New Roman",serif;'>&nbsp;If you decide to use&nbsp;</span><span style='font-family:"Times New Roman",serif;'>Odaaay</span><span style=";">, you understand that your Personal Information will be collected, transferred, stored, processed, disclosed</span><span style='font-family:"Times New Roman",serif;'>,</span><span style='font-family:"Times New Roman",serif;'>&nbsp;and otherwise used in the U.S. as described in this Privacy Policy. You also understand that your information may be transferred by us from the U.S. to other countries, which may have different or less stringent data protection laws than your country, in connection with providing services to you.&nbsp;</span></li>
                    </ul>
                    <ul style="list-style-type: disc;">
                        <li>We are strongly committed to protecting users&apos; Personal Information. Under this Policy, we may share your information only under particular situations, which you can learn more about in the &quot;When May We Share Your Information&quot; section of this Privacy Policy. In particular, we do not share your Personal Information for marketing purposes. Because we protect all users in accordance with this Privacy Policy, we do not change our behavior in response to a web browser&apos;s &quot;do not track&quot; signal.</li>
                        <li>Please note that in the event of any differences in meaning or interpretation between the original English version of this Privacy Policy and a translation, the original English version takes precedence.</li>
                    </ul>
                  <h5 id="list-item-12">Contact Us</h5>
                  <p>If you have questions or suggestions about this Privacy Policy or the information collected under this Privacy Policy, please email us at legal@odaaay.com.</p>
                </div>
              </b-col>
            </b-row>
          </b-container>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "priPolicy",
  data() {
    return {
      offset: {top: 10, bottom: 20}
    }
  },
  methods: {
    onActivate(target) {
      console.log('Receved Event: scrollspy::activate for target ', target);
    },
    scrollInView($event) {
      let href = $event.target.getAttribute('href')
      if (href) {
        let el = document.querySelector(href);
        if (el) {
          el.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }
    }
  },
  created() {
    this.$root.$on('scrollspy::activate', this.onActivate);
  }
}
</script>

<style scoped>

.parallax {
  /* The image used */
  background-color: #ffc107;
  background-image: url('https://www.redditinc.com/assets/images/site/planet-06.svg'), url("https://www.redditinc.com/assets/images/site/wave-05.png");
  transform: translate3d(0px, 0px, 0px);
  /* Full height */
  height: 136px;

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: right bottom, center;
  background-repeat: no-repeat;
  background-size: contain;
}
.container-lo {
  padding-left: 15px;
  padding-right: 15px;
  max-width: 1060px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
}

#two-columns {
  padding-bottom: 86px;
}
#two-columns {
  padding-bottom: 64px;
  padding-top: 18px;
}

.list-group-item.list-group-item-action.active::after {
  font-family: "Font Awesome 5 Free";
  content: "\f0d9";
  display: inline-block;
  padding-bottom: 2px;
  padding-right: 3px;
  vertical-align: middle;
  font-weight: 900;
  padding-left: 10px;
}
.list-group-item.list-group-item-action.active {
  font-weight: bolder !important;
}

list-group-item {
  position: relative;
  display: block;
  padding: 0.75rem 1.25rem;
  margin-bottom: -1px;
  background-color: #fff;
  border: none;
  font-size: large !important;
}


</style>
