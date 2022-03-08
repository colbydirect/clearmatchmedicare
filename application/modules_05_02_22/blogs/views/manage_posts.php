<link rel="stylesheet" type="text/css" href="<?= bs() ?>public/b-asset/lib/datatables/datatables.net-bs4/css/dataTables.bootstrap4.css" />
<link rel="stylesheet" type="text/css" href="<?= bs() ?>public/b-asset/lib/datatables/datatables.net-responsive-bs4/css/responsive.bootstrap4.min.css" />

<div class="be-content">
   <div class="page-head">
      <h2 class="page-head-title">Resources List</h2>
      <nav aria-label="breadcrumb" role="navigation">
         <ol class="breadcrumb page-head-nav">
            <li class="breadcrumb-item"><a href="#">Home</a></li>
            <li class="breadcrumb-item"><a href="#">Resources</a></li>
            <li class="breadcrumb-item active"> Resources List</li>
         </ol>
      </nav>
   </div>
   <div class="main-content container-fluid">
      <div class="row">
         <div class="col-sm-12">
            <?php if (!empty($this->session->flashdata('success'))) : ?>
               <div class="alert alert-contrast alert-success alert-dismissible" role="alert">
                  <div class="icon"><span class="mdi mdi-check"></span></div>
                  <div class="message">
                     <button class="close" type="button" data-dismiss="alert" aria-label="Close"><span class="mdi mdi-close" aria-hidden="true"></span></button>
                     <strong> <?= $this->session->flashdata('success') ?> </strong>
                  </div>
               </div>
            <?php endif; ?>
            <div class="card card-table  card-border-color card-border-color-primary">
               <div class="card-header"> <span class="icon mdi mdi-blogger"></span> Resources List

               </div>
               <div class="card-body">
                  <div class="row">
                     <div class="col-sm-12">
                        <table class="table table-striped table-hover table-fw-widget" id="table1">
                           <thead>
                              <tr>
                                 <th>Post Title</th>
                                 <th>Featured Image</th>
                                 <th>Created at</th>
                                 <th>Status</th>
								  <th>View Count</th>
                                 <th>Actions</th>
                              </tr>
                           </thead>
                           <tbody>
                              <?php if (!empty($posts)) : ?>
                                 <?php
                                 foreach ($posts as $post) :
							   //pr($post);
                                 ?>
                                    <tr>
                                       <td><?php echo $post->title ?></td>
                                       <td><img src="<?php bs() ?><?php echo $post->featured_img ?>" alt="Featured Image" width="100"></td>
                                       <td><?php echo date('m-d-Y', strtotime($post->created_at)) ?></td>
                                       <td>
                                          <?php if ($post->status == 1) : ?>

                                             <a href="<?php bs() ?>blogs/posts/unpublish/<?php echo $post->id ?>" data-toggle="tooltip" data-placement="top" title="Click to Change Status">
                                                <button type="button" class="btn btn-success btn-xs">Publish</button>
                                             </a>

                                          <?php else : ?>

                                             <a href="<?php bs() ?>blogs/posts/publish/<?php echo $post->id ?>" data-toggle="tooltip" data-placement="top" title="Click to Change Status">
                                                <button type="button" class="btn btn-danger btn-xs">Unpublish</button>
                                             </a>

                                          <?php endif ?>
                                       </td>
										<td>
										<?php echo $post->counter ?>
										</td>
                                       <td>
                                          <a href="<?php bs() ?>blogs/posts/edit_post/<?php echo $post->id ?>">
                                             <button class="btn btn-space btn-outline-primary btn-space"> <span class="icon mdi mdi-comment-edit"></span> </button>
                                          </a>
                                          <?php if ($post->status == 0) : ?>

                                             <button class="btn btn-space btn-outline-warning btn-space" data-placement="top" title="This Post is Unpulish" disable data-toggle="tooltip"> 
                                                <span class="icon mdi mdi-open-in-new"></span> 
                                             </button>

                                          <?php else : ?>

                                             <a href="<?php bs() ?>blog/<?php echo $post->cat_slug; ?>/<?php echo $post->slug; ?>" target="_blank">
                                                <button type="button" class="btn btn-space btn-outline-warning btn-space">
                                                   <i class="icon mdi mdi-open-in-new"></i>
                                                </button>
                                             </a>

                                          <?php endif ?>
                                          <a onclick="deleteFunction('<?php bs() ?>blogs/posts/delete_post/<?php echo $post->id ?>')" href="javascript:void(0)">
                                          <button type="button" class="btn btn-space btn-outline-danger btn-space"><i class="icon mdi mdi-delete"></i></button>
                                          </a>
                                       </td>
                                    </tr>

                                 <?php endforeach ?>

                              <?php else : ?>

                                 <tr>
                                    <td colspan="5" align="center">
                                       <p>
                                         No data available
                                       </p>
                                    </td>
                                 </tr>

                              <?php endif ?>
                           </tbody>
                        </table>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
