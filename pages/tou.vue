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
                  <option selected>Terms Of Use</option>
                  <option value="1">Privacy Policy</option>
                  <option value="2">Content Policy</option>
                  <option value="3">User Agreement</option>
                </select>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="12" md="4" class="pr-3 text-left text-md-right">
                <div class="position-relative text-12">
                  <b-list-group v-b-scrollspy:listgroup-ex>
                    <b-list-group-item href="#list-item-1" @click.stop="scrollInView($event)" class="border-0 text-18">Summary </b-list-group-item>
                    <b-list-group-item href="#list-item-2" @click.stop="scrollInView($event)" class="border-0 text-18">Thank You!</b-list-group-item>
                    <b-list-group-item href="#list-item-3" @click.stop="scrollInView($event)" class="border-0 text-18">Our Terms of Use</b-list-group-item>
                    <b-list-group-item href="#list-item-4" @click.stop="scrollInView($event)" class="border-0 text-18">Overview</b-list-group-item>
                    <b-list-group-item href="#list-item-5" @click.stop="scrollInView($event)" class="border-0 text-18">Our Services</b-list-group-item>
                    <b-list-group-item href="#list-item-6" @click.stop="scrollInView($event)" class="border-0 text-18">Privacy Policy</b-list-group-item>
                    <b-list-group-item href="#list-item-7" @click.stop="scrollInView($event)" class="border-0 text-18">Content We Host</b-list-group-item>
                    <b-list-group-item href="#list-item-8" @click.stop="scrollInView($event)" class="border-0 text-18">Refraining from Certain Activities</b-list-group-item>
                    <b-list-group-item href="#list-item-9" @click.stop="scrollInView($event)" class="border-0 text-18">Your Account and Your Account Security</b-list-group-item>
                    <b-list-group-item href="#list-item-10" @click.stop="scrollInView($event)" class="border-0 text-18">Your Content</b-list-group-item>
                    <b-list-group-item href="#list-item-11" @click.stop="scrollInView($event)" class="border-0 text-18">Paid Content</b-list-group-item>
                    <b-list-group-item href="#list-item-12" @click.stop="scrollInView($event)" class="border-0 text-18">License</b-list-group-item>
                    <b-list-group-item href="#list-item-13" @click.stop="scrollInView($event)" class="border-0 text-18">Trademarks</b-list-group-item>
                    <b-list-group-item href="#list-item-14" @click.stop="scrollInView($event)" class="border-0 text-18">DMCA Compliance</b-list-group-item>
                    <b-list-group-item href="#list-item-15" @click.stop="scrollInView($event)" class="border-0 text-18">Third-party Websites and Resources</b-list-group-item>
                    <b-list-group-item href="#list-item-16" @click.stop="scrollInView($event)" class="border-0 text-18">Management </b-list-group-item>
                    <b-list-group-item href="#list-item-17" @click.stop="scrollInView($event)" class="border-0 text-18">Termination</b-list-group-item>
                    <b-list-group-item href="#list-item-18" @click.stop="scrollInView($event)" class="border-0 text-18">Disputes and Jurisdiction</b-list-group-item>
                    <b-list-group-item href="#list-item-19" @click.stop="scrollInView($event)" class="border-0 text-18">Disclaimers</b-list-group-item>
                    <b-list-group-item href="#list-item-20" @click.stop="scrollInView($event)" class="border-0 text-18">Limitation on Liability</b-list-group-item>
                    <b-list-group-item href="#list-item-21" @click.stop="scrollInView($event)" class="border-0 text-18">Modifications to these Terms of Use</b-list-group-item>
                    <b-list-group-item href="#list-item-22" @click.stop="scrollInView($event)" class="border-0 text-18">Resolutions and Project Policies</b-list-group-item>
                    <b-list-group-item href="#list-item-23" @click.stop="scrollInView($event)" class="border-0 text-18">Other Terms</b-list-group-item>
                    <b-list-group-item href="#list-item-24" @click.stop="scrollInView($event)" class="border-0 text-18">Miscellaneous Terms</b-list-group-item>
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
                    <h5 id="list-item-1">Welcome </h5>
                        <p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;text-align:justify;'><span style='font-family:"Times New Roman",serif;'>&nbsp;</span></p>
                        <p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;text-align:justify;'><em><span style='font-size:11px;font-family:"Times New Roman",serif;'>*</span></em><em><span style='font-size:11px;font-family:"Times New Roman",serif;'>This summary is not a part of the Terms of Use and is not a legal document. It is simply a handy reference for understanding the full terms. Think of it as the user-friendly interface to the legal language of our Terms of Use.</span></em></p>
                        <p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;text-align:justify;'><span style='font-family:"Times New Roman",serif;'>&nbsp;</span></p>
                        <p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;text-align:justify;'><span style='font-family:"Times New Roman",serif;'>&nbsp;</span></p>
                        <p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;text-align:justify;'><strong><span style='font-family:"Times New Roman",serif;'>Part of our mission is to</span></strong><span style='font-family:"Times New Roman",serif;'>:&nbsp;</span></p>
                        <ul style="list-style-type: disc;">
                            <li><span style='font-family:"Times New Roman",serif;'>Empower creators around the world to expose their work without censoring or stealing their content (yes, some platforms do that).</span></li>
                            <li><span style='font-family:"Times New Roman",serif;'>Help creators around the world to make money from their work.</span></li>
                            <li><span style='font-family:"Times New Roman",serif;'>Effectively distribute and share this content in various languages.&nbsp;</span></li>
                        </ul>
                        <p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;text-align:justify;'><span style='font-family:"Times New Roman",serif;'><br> <strong>You are free to</strong>:&nbsp;</span></p>
                        <ul style="list-style-type: disc;">
                            <li><span style='font-family:"Times New Roman",serif;'>Post and share your articles and other media.&nbsp;</span></li>
                            <li><span style='font-family:"Times New Roman",serif;'>Edit your articles and other media.</span></li>
                            <li><span style='font-family:"Times New Roman",serif;'>Decide which license you wish to use for your articles and other media.&nbsp;</span></li>
                            <li><span style='font-family:"Times New Roman",serif;'>Decide whether to charge your subscribers for your content or not.</span></li>
                        </ul>
                        <p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;text-align:justify;'><span style='font-family:"Times New Roman",serif;'><br> <strong>Under the following conditions</strong>:&nbsp;</span></p>
                        <ul style="margin-bottom:0cm;" type="disc">
                            <li style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;text-align:justify;'><strong><span style='font-family:"Times New Roman",serif;'>Responsibility</span></strong><span style='font-family:"Times New Roman",serif;'>&nbsp;&ndash; You take responsibility for&nbsp;</span><span style='font-family:     "Times New Roman",serif;'>the content of your</span><span style='font-family:"Times New Roman",serif;'>&nbsp;</span><span style='font-family:"Times New Roman",serif;'>articles&nbsp;</span><span style='font-family:"Times New Roman",serif;'>&nbsp;(since we only <em>host</em> your content).</span></li>
                            <li style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;text-align:justify;'><strong><span style='font-family:"Times New Roman",serif;'>Civility</span></strong><span style='font-family:"Times New Roman",serif;'>&nbsp;&ndash; You support a civil environment and do not harass other users.</span></li>
                            <li style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;text-align:justify;'><strong><span style='font-family:"Times New Roman",serif;'>Lawful Behavior</span></strong><span style='font-family:"Times New Roman",serif;'>&nbsp;&ndash; You do not violate copyright or other laws.</span></li>
                            <li style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;text-align:justify;'><strong><span style='font-family:"Times New Roman",serif;'>No Harm</span></strong><span style='font-family:"Times New Roman",serif;'>&nbsp;&ndash; You do not harm our technology infrastructure.</span></li>
                            <li style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;text-align:justify;'><strong><span style='font-family:"Times New Roman",serif;'>Terms of Use and Policies</span></strong><span style='font-family:"Times New Roman",serif;'>&nbsp;&ndash; You adhere to&nbsp;</span><span style='font-family:"Times New Roman",serif;'>our</span><span style='font-family:"Times New Roman",serif;'>&nbsp;Terms of Use and the applicable policies when you visit our sites or participate in our communities.</span></li>
                        </ul>
                        <p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;text-align:justify;'><span style='font-family:"Times New Roman",serif;'><br> <strong>With the understanding that</strong>:&nbsp;</span></p>
                        <p><strong><span style='font-size:16px;font-family:"Times New Roman",serif;'>It is your work; we are merely hosting your content-&nbsp;</span></strong><span style='font-size:16px;font-family:"Times New Roman",serif;'>we are a platform, not a publisher.</span></p>
                    <h5 id="list-item-2">Thank You! </h5>
                        <p style='margin-right:0cm;margin-left:0cm;font-size:16px;font-family:"Calibri",sans-serif;margin:0cm;text-align:justify;'>We appreciate your taking the time to read these Terms of Use, and we are very happy to have you using our services. Through your contributions, you are helping to build something really big &ndash; not only an important collection of collaboratively edited reference Projects that provides education and information to millions who might otherwise lack access but also a vibrant community of like-minded and engaged peers, focused on a very noble goal. If you have any questions, comments, or concerns regarding these Terms or our services, please contact us at legal@odaaay.com.</p>
                    <h5 id="list-item-3">Our Terms of Use </h5>
                        <p style='margin-right:0cm;margin-left:0cm;font-size:16px;font-family:"Calibri",sans-serif;margin:0cm;text-align:justify;'><span style='font-family:"Times New Roman",serif;'>If you are reading this, either you are considering using our services or looking to sue us. In both cases,&nbsp;</span><span style='font-family:"Times New Roman",serif;'>Welcome to&nbsp;</span><span style='font-family:"Times New Roman",serif;'>Odaaay</span><span style='font-family:"Times New Roman",serif;'>!&nbsp;</span><span style='font-family:"Times New Roman",serif;'>Odaaay</span><span style='font-family:"Times New Roman",serif;'>&nbsp;(&ldquo;we&rdquo;</span><span style='font-family:"Times New Roman",serif;'>,&nbsp;</span><span style='font-family:"Times New Roman",serif;'>&ldquo;our&rdquo; or &ldquo;us&rdquo;), is a</span><span style='font-family:"Times New Roman",serif;'>n&nbsp;</span><span style='font-family:"Times New Roman",serif;'>organization whose mission is to empower&nbsp;</span><span style='font-family:"Times New Roman",serif;'>creators</span><span style='font-family:"Times New Roman",serif;'>&nbsp;around the world</span><span style='font-family:"Times New Roman",serif;'>, facilitating the payment process from subscriber to creator while helping them gain exposure and effectively disseminate their content worldwide.</span></p>
                        <p style='margin-right:0cm;margin-left:0cm;font-size:16px;font-family:"Calibri",sans-serif;margin:0cm;text-align:justify;'><span style='font-family:"Times New Roman",serif;'>To support our&nbsp;</span><span style='font-family:"Times New Roman",serif;'>mission</span><span style='font-family:"Times New Roman",serif;'>, we provide the essential infrastructure and organizational framework for the development of multilingual&nbsp;</span><span style='font-family:"Times New Roman",serif;'>content</span><span style='font-family:"Times New Roman",serif;'>&nbsp;and their editions and other endeavors which serve this mission.&nbsp;</span></p>
                        <p style='margin-right:0cm;margin-left:0cm;font-size:16px;font-family:"Calibri",sans-serif;margin:0cm;text-align:justify;'><span style='font-family:"Times New Roman",serif;'>We welcome you (&ldquo;you&rdquo; or the &ldquo;user&rdquo;) as a reader, editor, author,&nbsp;</span><span style='font-family:"Times New Roman",serif;'>lawyer,&nbsp;</span><span style='font-family:"Times New Roman",serif;'>or contributor of the&nbsp;</span><span style='font-family:"Times New Roman",serif;'>different projects</span><span style='font-family:"Times New Roman",serif;'>, and we encourage you to join&nbsp;</span><span style='font-family:"Times New Roman",serif;'>the different channels, which make odaaay</span><span style='font-family:"Times New Roman",serif;'>. Before you participate, however, we ask that you please read and agree to the following Terms of Use (&ldquo;Terms of Use&rdquo;).&nbsp;</span></p>
                        <p style='margin-right:0cm;margin-left:0cm;font-size:16px;font-family:"Calibri",sans-serif;margin:0cm;text-align:justify;'>If you publish content through Odaaay, you are a <strong>Creator</strong>. If you subscribe to a creator&rsquo;s&nbsp;channel, you are a <strong>Subscriber</strong>. Subscribers subscribe to channels directly through the Publisher&rsquo;s channel on Odaaay.</p>
                        <p style='margin-right:0cm;margin-left:0cm;font-size:16px;font-family:"Calibri",sans-serif;margin:0cm;text-align:justify;'><span style='font-family:"Times New Roman",serif;'>You&nbsp;</span><span style='font-family:"Times New Roman",serif;'>state, assert</span><span style='font-family:"Times New Roman",serif;'>&nbsp;and confirm</span><span style='font-family:"Times New Roman",serif;'>&nbsp;</span><span style='font-family:"Times New Roman",serif;'>that you are of legal age to form a binding contract (or if not, that you&rsquo;ve received your parent&rsquo;s or guardian&rsquo;s permission to use&nbsp;</span><span style='font-family:"Times New Roman",serif;'>Odaaay</span><span style='font-family:"Times New Roman",serif;'>&nbsp;and that your parent or guardian agrees to these Terms on your behalf).&nbsp;</span></p>
                        <p style='margin-right:0cm;margin-left:0cm;font-size:16px;font-family:"Calibri",sans-serif;margin:0cm;text-align:justify;'><span style='font-family:"Times New Roman",serif;'>If you&rsquo;re agreeing to these Terms on behalf of an organization or entity, you&nbsp;</span><span style='font-family:"Times New Roman",serif;'>state, assert</span><span style='font-family:"Times New Roman",serif;'>&nbsp;and&nbsp;</span><span style='font-family:"Times New Roman",serif;'>confirm</span><span style='font-family:"Times New Roman",serif;'>&nbsp;that you are authorized to agree to these Terms on that organization or entity&rsquo;s behalf and bind them to these Terms&nbsp;</span><span style='font-family:"Times New Roman",serif;'>hence</span><span style='font-family:"Times New Roman",serif;'>, the references to &ldquo;you&rdquo; and &ldquo;your&rdquo; throughout this document refer to that organization or entity.</span></p>
                    <h5 id="list-item-4">Overview </h5>
                        <p style='margin-right:0cm;margin-left:0cm;font-size:16px;font-family:"Calibri",sans-serif;margin:0cm;text-align:justify;'>These Terms of Use tell you about our services, our relationship to you as a user, and the rights and responsibilities that guide us both. We want you to know that we do not contribute, monitor, or delete content (with the rare exception of policies like these Terms of Use or legal compliance for DMCA notices). This means that editorial control is in the hands of you and your fellow users who create and manage the content. We merely host this content&nbsp;and we are happy to do it.</p>
                        <p style='margin-right:0cm;margin-left:0cm;font-size:16px;font-family:"Calibri",sans-serif;margin:0cm;text-align:justify;'>The community &ndash; the network of users who are constantly building and using our services &ndash; are the principal means through which the goals of the mission are achieved. The community contributes to and helps govern the different channels. The community undertakes the critical function of creating and enforcing policies for the different channels.&nbsp;</p>
                        <p style='margin-right:0cm;margin-left:0cm;font-size:16px;font-family:"Calibri",sans-serif;margin:0cm;text-align:justify;'>You are welcome to join as a contributor, reader, or author, but you should follow the policies that govern the creation of the different channels.</p>
                        <p><span style='font-size:16px;font-family:"Calibri",sans-serif;'>Please be aware that you are legally responsible for all of your contributions</span><span style='font-size:16px;font-family:"Calibri",sans-serif;'>&nbsp;and&nbsp;</span><span style='font-size:16px;font-family:"Calibri",sans-serif;'>edits, of content&nbsp;</span><span style='font-size:16px;font-family:"Calibri",sans-serif;'>you post&nbsp;</span><span style='font-size:16px;font-family:"Calibri",sans-serif;'>under the laws of the United States of America and other applicable laws (which may include the laws where you live or where you view or edit content). This means it is important that you use caution when posting content. In light of this responsibility, we have some rules about what you cannot post, most of which is either for your own protection or for the protection of other users like yourself. We also include other important notices and disclaimers, so please read these Terms of Use in their entirety.&nbsp;</span></p>
                    <h5 id="list-item-5">Our Services </h5>
                        <p style='margin-right:0cm;margin-left:0cm;font-size:16px;font-family:"Calibri",sans-serif;margin:0cm;text-align:justify;'>Odaaay is dedicated to encouraging the development and distribution of multilingual content. Our role is to host some of the best content on the web while giving its creators full control over their content in terms of exposure and finances. &nbsp;There are a couple of things you should be aware of when considering our relationship to you, the content, and the other users:</p>
                        <ol start="1" style="margin-bottom:0cm;" type="a">
                            <li style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;text-align:justify;'><strong>We do not take an editorial role:</strong> All of the content that we host is provided by users like yourself, and we do not take an editorial role. This means that we generally do not monitor or edit the content on Odaaay, and we do not take any responsibility for this content. Similarly, we do not endorse any opinions expressed via our services, and we do not represent or guarantee the truthfulness, accuracy, or reliability of any submitted community content. Instead, we simply provide access to the content that your fellow users have contributed.</li>
                            <li style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;text-align:justify;'><strong>You are responsible for your actions:</strong> You are legally responsible for your content on Odaaay, so for your protection, you should exercise caution and avoid contributing any content that may result in criminal or civil liability under any applicable laws. For clarity, applicable law includes at least the laws of the United States of America. Although we may not agree with such actions, we warn editors and contributors that authorities may seek to apply other country laws to you, including local laws where you live or where you view or edit content. We generally cannot offer any protection, guarantee, immunity, or indemnification.</li>
                        </ol>
                    <h5 id="list-item-6">Privacy Policy </h5>
                        <p>
                            We ask that you review the terms of our Privacy Policy so that you are aware of how we collect and use your information. Because our services are used by people all over the world, personal information that we collect may be stored and processed in the United States of America or any other country in which we or our agents maintain facilities. By using our services, you consent to any such transfer of information outside your country.
                        </p>
                    <h5 id="list-item-7">Content We Host </h5>
                        <ol start="1" style="margin-bottom:0cm;" type="a">
                            <li style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;text-align:justify;'><strong>You may find some material objectionable or erroneous:</strong> Because we provide a wide array of content that is produced or gathered by fellow users, you may encounter material that you find offensive, erroneous, misleading, mislabeled, or otherwise objectionable. We, therefore, ask that you use common sense and proper judgment when using our services.</li>
                            <li style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;text-align:justify;'><strong>Our content is for general informational purposes only:</strong> Although we host a great deal of information as well as opinion pieces that pertains to professional topics, including medical, legal, or financial issues, this content is presented for general informational purposes only. It should not be taken as professional advice. Please seek independent professional counseling from someone who is licensed or qualified in the applicable area instead of acting on any information, opinion, or advice contained in Odaaay.</li>
                        </ol>
                    <h5 id="list-item-8">Refraining from Certain Activities </h5>
                        <p style='margin-right:0cm;margin-left:0cm;font-size:16px;font-family:"Calibri",sans-serif;margin:0cm;text-align:justify;'>Content hosted by Odaaay only exists because of the vibrant community of users like you who collaborate to write, edit, and curate the content. We happily welcome your participation in this community. We encourage you to be civil and polite in your interactions with others in the community, to act in good faith, and to make edits and contributions aimed at furthering the mission of the shared Project.</p>
                        <p style='margin-right:0cm;margin-left:0cm;font-size:16px;font-family:"Calibri",sans-serif;margin:0cm;text-align:justify;'>Certain activities, whether legal or illegal, may be harmful to other users and violate our rules, and some activities may also subject you to liability. Therefore, for your protection and for that of other users, you may not engage in such activities on our sites. These activities include:</p>
                        <p style='margin-right:0cm;margin-left:36.0pt;font-size:16px;font-family:"Calibri",sans-serif;margin:0cm;text-align:justify;'><strong>Harassing and Abusing Others</strong></p>
                        <ul style="list-style-type: disc;margin-left:62px;">
                            <li>Engaging in harassment, threats, stalking, spamming, or vandalism; and</li>
                            <li>Transmitting chain mail, junk mail, or spam to other users.</li>
                        </ul>
                        <p style='margin-right:0cm;margin-left:36.0pt;font-size:16px;font-family:"Calibri",sans-serif;margin:0cm;text-align:justify;'><strong>Violating the Privacy of Others</strong></p>
                        <ul style="list-style-type: disc;margin-left:62px;">
                            <li>Infringing the privacy rights of others under the laws of the United States of America or other applicable laws (which may include the laws where you live or where you view or edit content);</li>
                            <li>Soliciting personally identifiable information for purposes of harassment, exploitation, violation of privacy, or any promotional or commercial purpose not explicitly approved by Odaaay; and</li>
                            <li>Soliciting personally identifiable information from anyone under the age of 18 for an illegal purpose or violating any applicable law regarding the health or well-being of minors.</li>
                        </ul>
                        <p style='margin-right:0cm;margin-left:36.0pt;font-size:16px;font-family:"Calibri",sans-serif;margin:0cm;text-align:justify;'><strong>Engaging in False Statements, Impersonation, or Fraud</strong></p>
                        <ul style="list-style-type: disc;margin-left:62px;">
                            <li>Intentionally or knowingly posting content that constitutes libel or defamation;</li>
                            <li>With the intent to deceive, posting content that is false or inaccurate;</li>
                            <li>Attempting to impersonate another user or individual, misrepresenting your affiliation with any individual or entity, or using the username of another user with the intent to deceive; and</li>
                            <li>Engaging in fraud.</li>
                        </ul>
                        <p style='margin-right:0cm;margin-left:36.0pt;font-size:16px;font-family:"Calibri",sans-serif;margin:0cm;text-align:justify;'><strong>Committing Infringement</strong></p>
                        <div style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'>
                            <ul style="margin-bottom:0cm;list-style-type: disc;margin-left:62px;">
                                <li style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'>Infringing copyrights, trademarks, patents, or other proprietary rights under applicable law.</li>
                            </ul>
                        </div>
                        <p style='margin-right:0cm;margin-left:36.0pt;font-size:16px;font-family:"Calibri",sans-serif;margin:0cm;'><strong>Misusing Our Services for Other Illegal Purposes</strong></p>
                        <ul style="list-style-type: disc;margin-left:62px;">
                            <li>Posting child pornography or any other content that violates applicable law concerning child pornography;</li>
                            <li>Posting or trafficking in obscene material that is unlawful under applicable law; and</li>
                            <li>Using the services in a manner that is inconsistent with applicable law.</li>
                        </ul>
                        <p style='margin-right:0cm;margin-left:36.0pt;font-size:16px;font-family:"Calibri",sans-serif;margin:0cm;'><strong>Engaging in Disruptive and Illegal Misuse of Facilities</strong></p>
                        <ul style="list-style-type: disc;margin-left:62px;">
                            <li>Posting or distributing content that contains any viruses, malware, worms, Trojan horses, malicious code, or other devices that could harm our technical infrastructure or system or that of our users;</li>
                            <li>Engaging in automated uses of the site that are abusive or disruptive of the services and have not been approved by Odaaay;</li>
                            <li>Disrupting the services by placing an undue burden on Odaaay;</li>
                            <li>Disrupting the services by inundating Odaaay with communications or other traffic that suggests no serious intent to use the website for its stated purpose;</li>
                            <li>Knowingly accessing, tampering with, or using any of our non-public areas in our computer systems without authorization; and</li>
                            <li>Probing, scanning, or testing the vulnerability of any of our technical systems or networks unless all the following conditions are met:<ul style="list-style-type: square;">
                                    <li>such actions do not unduly abuse or disrupt our technical systems or networks;</li>
                                    <li>such actions are not for personal gain (except for credit for your work);</li>
                                    <li>you report any vulnerabilities to Odaaay&rsquo;s developers (or fix it yourself); and</li>
                                    <li>you do not undertake such actions with malicious or destructive intent.</li>
                                </ul>
                            </li>
                        </ul>
                        <p style='margin-right:0cm;margin-left:0cm;font-size:16px;font-family:"Calibri",sans-serif;margin:0cm;text-align:justify;'>We reserve the right to exercise our enforcement discretion concerning the above terms.</p>
                    <h5 id="list-item-9">Your Account and Your Account Security </h5>
                        <p style='margin-right:0cm;margin-left:0cm;font-size:16px;font-family:"Calibri",sans-serif;margin:0cm;text-align:justify;'>You may be required to sign up for an account and select a password. You promise to provide us with accurate, complete, and up-to-date registration information about yourself.&nbsp;</p>
                        <p style='margin-right:0cm;margin-left:0cm;font-size:16px;font-family:"Calibri",sans-serif;margin:0cm;text-align:justify;'>You may not select an account name that you don&rsquo;t have the right to use, or another person&rsquo;s name with the intent to impersonate that person. Odaaay reserves the right to refuse registration of or cancel an Odaaay&nbsp;account name at its discretion.</p>
                        <p style='margin-right:0cm;margin-left:0cm;font-size:16px;font-family:"Calibri",sans-serif;margin:0cm;text-align:justify;'>You will not license, sell, or transfer your Account without our prior written approval.</p>
                        <p style='margin-right:0cm;margin-left:0cm;font-size:16px;font-family:"Calibri",sans-serif;margin:0cm;text-align:justify;'>You are responsible for safeguarding your password and should never disclose it to any third party.</p>
                        <p style='margin-right:0cm;margin-left:0cm;font-size:16px;font-family:"Calibri",sans-serif;margin:0cm;text-align:justify;'>In case you lose access to your account, please contact us at help@odaaay.com- we will try to help, but unfortunately, we can&rsquo;t promise that we can give you access to your account if we cannot confirm if it is yours.</p>
                    <h5 id="list-item-10">Your Content </h5>
                        <p style='margin-right:0cm;margin-left:0cm;font-size:16px;font-family:"Calibri",sans-serif;margin:0cm;text-align:justify;'>Anything posted, uploaded, shared, stored, or otherwise provided through Odaaay is referred to as &ldquo;content&rdquo; in these Terms. There are a few rules that apply to content:</p>
                        <ul style="list-style-type: disc;margin-left:26px;">
                            <li>Don&rsquo;t Infringe: Your content should not violate someone else&rsquo;s rights. Don&rsquo;t copy, reproduce, modify, translate, publish, broadcast, transmit, distribute, perform, upload, display, license, sell, commercialize or otherwise exploit for any purpose any content not owned by you unless you have prior consent from the owner of that content.&nbsp;</li>
                            <li>Limited License to Us: To display your content on Odaaay, and to allow other users to enjoy it, you grant us certain rights in your Posts, specifically you grant us a license to translate, modify, reproduce, and otherwise act concerning your content&nbsp;to enable us to provide, improve, and notify you about new features within Odaaay. You understand and agree that we may need to make changes to your Posts to conform and adapt those Posts to the technical requirements of networks, devices, services, or media, and this license includes the rights to do so. For example, we may need to modify your content to make sure it is viewable on an iPhone as well as a computer.&nbsp;</li>
                            <li>Public Posts: If you share&nbsp;content&nbsp;with other users on Odaaay, then you grant us the license above, as well as a license to display, perform, translate&nbsp;and distribute your content. Also, you grant all other users of Odaaay a license to access the Post and to use and exercise all rights in it, as permitted by the functionality of Odaaay.&nbsp;</li>
                            <li>Term of License: You agree that the licenses you grant are royalty-free, perpetual, irrevocable, and worldwide. This is a license only &ndash; your ownership of your content&nbsp;is not affected.</li>
                        </ul>
                        <p style='margin-right:0cm;margin-left:0cm;font-size:16px;font-family:"Calibri",sans-serif;margin:0cm;text-align:justify;'>We reserve the right to remove any content,&nbsp;at any time, for any reason (including, but not limited to, if someone alleges you contributed that Content in violation of these Terms), in our sole discretion, and without notice.&nbsp;</p>
                        <p style='margin-right:0cm;margin-left:0cm;font-size:16px;font-family:"Calibri",sans-serif;margin:0cm;text-align:justify;'><span style='font-family:"Times New Roman",serif;'>Any ideas, suggestions, and feedback about&nbsp;</span><span style='font-family:"Times New Roman",serif;'>Odaaay</span><span style='font-family:"Times New Roman",serif;'>&nbsp;or our Services that you provide to us are entirely voluntary, and you agree that&nbsp;</span><span style='font-family:"Times New Roman",serif;'>Odaaay</span><span style='font-family:"Times New Roman",serif;'>&nbsp;may use such ideas, suggestions, and feedback without compensation or obligation to you.</span></p>
                        <p style='margin-right:0cm;margin-left:0cm;font-size:16px;font-family:"Calibri",sans-serif;margin:0cm;text-align:justify;'><span style='font-family:"Times New Roman",serif;'>&nbsp;</span></p>
                        <p><span style='font-size:16px;font-family:"Calibri",sans-serif;'>Before we forget,&nbsp;</span><span style='font-size:16px;font-family:"Times New Roman",serif;'>w</span><span style='font-size:16px;font-family:"Times New Roman",serif;'>hen Your Content is created with or submitted to the Services, you grant us a worldwide, royalty-free, perpetual, irrevocable, non-exclusive, transferable, and sublicensable license to use, copy, modify, adapt, prepare derivative works of, distribute, store, perform, and display Your Content and any name, username, voice, or likeness provided in connection with Your Content in all media formats and channels now known or later developed anywhere in the world. This license includes the right for us to make Your Content available for syndication, broadcast, distribution, or publication by other companies, organizations, or individuals who partner with&nbsp;</span><span style='font-size:16px;font-family:"Times New Roman",serif;'>Odaaay</span><span style='font-size:16px;font-family:"Times New Roman",serif;'>. You also agree that we may remove metadata associated with Your Content, and you irrevocably waive any claims and assertions of moral rights or attribution concerning Your Content.</span><span style='font-size:16px;font-family:"Times New Roman",serif;'>&nbsp;Fear not, we are just joking, we are not like those big tech companies stealing your content, with us your content is your content. This paragraph is just a prank, hopefully, you do not take it seriously and I lose my job, kinda need it, and it is a great job.&nbsp;</span></p>
                    <h5 id="list-item-11">Paid Content </h5>
                        <p style='margin-right:0cm;margin-left:0cm;font-size:16px;font-family:"Calibri",sans-serif;margin:0cm;text-align:justify;'>A creator may offer their content for free or for a subscription fee, to be determined at the Creator&rsquo;s discretion. Subscribers may choose to subscribe to a creator&rsquo;s&nbsp;channel on Odaaay and agree to incur any applicable subscription fees.&nbsp;</p>
                        <p style='margin-right:0cm;margin-left:0cm;font-size:16px;font-family:"Calibri",sans-serif;margin:0cm;text-align:justify;'>Creators will set prices for their content and may change the prices at their sole discretion through their Creator&rsquo;s account, though no price changes shall apply retroactively.&nbsp;</p>
                        <p style='margin-right:0cm;margin-left:0cm;font-size:16px;font-family:"Calibri",sans-serif;margin:0cm;text-align:justify;'>In the event that a Subscriber has a dispute with a Creator, you agree that Odaaay is under no obligation to become involved other than to direct any inquiries regarding a Creator&rsquo;s channel to the appropriate Creator under the Creator Guidelines. To learn more about how Odaaay manages its relationships with Creators, you should check out the Creator Guideline.</p>
                    <h5 id="list-item-12">License </h5>
                        <p>
                            You're under no obligation to choose a license. However, without a license, the default copyright laws apply, meaning that you retain all rights to your content and no one may reproduce, distribute, or create derivative works from your work. Nonetheless, if you wish to change the default license, please make an informed decision. We display the license information to help users get information about the content. We hope it helps, but please keep in mind that we’re not lawyers and that we make mistakes like everyone else. For that reason, Odaaay provides the information on an "as-is" basis and makes no warranties regarding any information or licenses provided on or through it, and disclaims liability for damages resulting from using the license information. If you have any questions regarding the right license for your code or any other legal issues relating to it, it’s always best to consult with a professional.
                        </p>
                    <h5 id="list-item-13">Trademarks </h5>
                        <p>
                            To protect our users from fraudulent impersonators, we protect our trademark rights. Because of this, we ask that you please respect our trademarks. Any use of our trade names, trademarks, service marks, logos, or domain names must comply with these Terms of Use.
                        </p>
                    <h5 id="list-item-14">DMCA Compliance </h5>
                        <p style='margin-right:0cm;margin-left:0cm;font-size:16px;font-family:"Calibri",sans-serif;margin:0cm;text-align:justify;'>In fairness to our users, as well as to other creators and copyright holders, our policy is to respond to notices of alleged infringement that comply with the formalities of the Digital Millennium Copyright Act (DMCA). Under the DMCA, we will terminate, in appropriate circumstances, users and account holders of our system and network who are repeat infringers.</p>
                        <p style='margin-right:0cm;margin-left:0cm;font-size:16px;font-family:"Calibri",sans-serif;margin:0cm;text-align:justify;'>However, we also recognize that not every takedown notice is valid or in good faith. In such cases, we strongly encourage users to file counter-notifications when they appropriately believe a DMCA takedown demand is invalid or improper. For more information on what to do if you think a DMCA notice has been improperly filed, you may wish to consult the Chilling Effects website.</p>
                        <p style='margin-right:0cm;margin-left:0cm;font-size:16px;font-family:"Calibri",sans-serif;margin:0cm;text-align:justify;'>If you are the owner of content that is being improperly used on one of the Projects without your permission, you may request that the content be removed under the DMCA. To make such a request, please email us at legal@odaaay.com.</p>
                        <p style='margin-right:0cm;margin-left:0cm;font-size:16px;font-family:"Calibri",sans-serif;margin:0cm;text-align:justify;'>Alternatively, you may communicate with the owner of the channel through the direct messaging option.</p>
                    <h5 id="list-item-15">Third-party Websites and Resources </h5>
                        <p>
                            You are solely responsible for your use of any third-party websites or resources. Although Odaaay contains links to third-party websites and resources, we do not endorse and are not responsible or liable for their availability, accuracy, or the related content, products, or services (including, without limitation, any viruses or other disabling features), nor do we have any obligation to monitor such third-party content.
                        </p>
                    <h5 id="list-item-16">Management </h5>
                        <p style='margin-right:0cm;margin-left:0cm;font-size:16px;font-family:"Calibri",sans-serif;margin:0cm;text-align:justify;'>The owner of the channel has the primary role in creating and enforcing policies in his channel.&nbsp;We rarely intervene in channel decisions about policy and its enforcement. In an unusual case, the need may arise, or some users&nbsp;may ask us, to address an especially problematic user because of significant disturbance or dangerous behavior. In such cases, we reserve the right but do not have the obligation to:</p>
                        <ul style="margin-bottom:0cm;" type="disc">
                            <li style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;text-align:justify;'>Investigate your use of the service (a) to determine whether a violation of these Terms of Use, or other applicable law or policy has occurred, or (b) to comply with any applicable law, legal process, or appropriate governmental request;</li>
                            <li style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;text-align:justify;'>Detect, prevent, or otherwise address fraud, security, or technical issues or respond to user support requests;</li>
                            <li style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;text-align:justify;'>Refuse, disable, or restrict access to the website of any user who violates these Terms of Use;</li>
                            <li style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;text-align:justify;'>Ban a user from creating or editing or blocking a user&apos;s account or access for actions violating these Terms of Use, including repeat copyright infringement;</li>
                            <li style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;text-align:justify;'>Take legal action against users who violate these Terms of Use (including reports to law enforcement authorities); and</li>
                            <li style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;text-align:justify;'>Manage otherwise the website in a manner designed to facilitate their proper functioning and protect the rights, property, and safety of ourselves and our users, licensors, partners, and the public.</li>
                        </ul>
                        <p style='margin-right:0cm;margin-left:0cm;font-size:16px;font-family:"Calibri",sans-serif;margin:0cm;text-align:justify;'>In the interests of our users, in the extreme circumstance that any individual has had his or her account or access blocked under this provision, he or she is prohibited from creating or using another account, unless we provide explicit permission. You agree to comply with the final decisions of dispute resolution bodies; these decisions may include sanctions as set out by the policy of the specific Project edition.</p>
                        <p style='margin-right:0cm;margin-left:0cm;font-size:16px;font-family:"Calibri",sans-serif;margin:0cm;text-align:justify;'>Odaaay will not ban a user from creating or&nbsp;editing or blocking a user&apos;s account or access solely because of good faith criticism that does not result in actions otherwise violating these Terms of Use or community policies.</p>
                        <p style='margin-right:0cm;margin-left:0cm;font-size:16px;font-family:"Calibri",sans-serif;margin:0cm;text-align:justify;'>The blocking of an account or access or the banning of a user under this provision shall be in accordance with the&nbsp;<strong>Termination</strong><strong>&nbsp;</strong>section of these Terms of Use.</p>
                    <h5 id="list-item-17">Termination </h5>
                        <p style='margin-right:0cm;margin-left:0cm;font-size:16px;font-family:"Calibri",sans-serif;margin:0cm;text-align:justify;'>Though we hope you will stay and continue to use Odaaay, you can stop using our services any time. In certain (hopefully unlikely) circumstances it may be necessary for either ourselves or the community or its members (as described in the <strong>Management&nbsp;</strong>Section) to terminate part or all of our services, terminate these Terms of Use, block your account or access, or ban you as a user. If your account or access is blocked or otherwise terminated for any reason, your public contributions will remain publicly available (subject to applicable policies), and, unless we notify you otherwise, you may still access our public pages for the sole purpose of reading publicly available content on the Projects. In such circumstances, however, you may not be able to access your account or settings. We reserve the right to suspend or end the services at any time, with or without cause, and with or without notice. Even after your use and participation are banned, blocked, or otherwise suspended, these Terms of Use will remain in effect with respect to relevant provisions.</p>
                        <p style='margin-right:0cm;margin-left:0cm;font-size:16px;font-family:"Calibri",sans-serif;margin:0cm;text-align:justify;'>Odaaay also allows you to delete your account at any time.<strong>&nbsp;</strong>If you&apos;d like to delete your account,<strong>&nbsp;</strong>you can do so from your account page<strong>.</strong> When you delete your account, any Posts associated with that account may&nbsp;not be deleted.</p>
                        <p style='margin-right:0cm;margin-left:0cm;font-size:16px;font-family:"Calibri",sans-serif;margin:0cm;text-align:justify;'>You understand and agree that it may not be possible to completely delete your content from Odaaay&rsquo;s records or backups and that your Posts may remain viewable elsewhere to the extent that they were copied or stored by other users. Please refer to our Privacy Policy to understand how we treat the&nbsp;information you provide to us after you have stopped using Odaaay.&nbsp;</p>
                        <p style='margin-right:0cm;margin-left:0cm;font-size:16px;font-family:"Calibri",sans-serif;margin:0cm;text-align:justify;'>You agree that some of the obligations in these Terms will be in force even after you terminate your account.&nbsp;All of the following terms will survive termination: any obligation you have to pay us or indemnify us, any limitations on our liability, any terms regarding ownership or intellectual property rights, terms regarding disputes between us, and any other terms that, by their nature, should survive termination of these Terms.</p>
                        <p style='margin-right:0cm;margin-left:0cm;font-size:16px;font-family:"Calibri",sans-serif;margin:0cm;text-align:justify;'>If you have deleted your account by mistake, contact us immediately at help@odaaay.com&ndash; we will try to help, but unfortunately, we can&rsquo;t promise that we can recover or restore anything.</p>
                    <h5 id="list-item-18">Disputes and Jurisdiction </h5>

                    <h5 id="list-item-19">Disclaimers </h5>
<!--                    <h5 id="list-item-1">Limitation on Liability </h5>-->
<!--                    <h5 id="list-item-1">Modifications to these Terms of Use </h5>-->
<!--                    <h5 id="list-item-1">Resolutions and Project Policies </h5>-->
<!--                    <h5 id="list-item-1">Other Terms </h5>-->
<!--                    <h5 id="list-item-1">Miscellaneous Terms </h5>-->
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
  name: "agreement",
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
